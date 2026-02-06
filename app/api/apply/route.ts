import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

/** Лимит заявок с одного IP за окно (по умолчанию 5 за 1 минуту) */
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_BODY_BYTES = 2048;
const MAX_FIELD_LENGTH = 500;

/** В памяти: IP -> массив timestamp последних запросов */
const rateLimitStore = new Map<string, number[]>();

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  if (forwarded) return forwarded.split(',')[0].trim();
  if (realIP) return realIP;
  return 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const cutoff = now - RATE_LIMIT_WINDOW_MS;
  let timestamps = rateLimitStore.get(ip) ?? [];
  timestamps = timestamps.filter(t => t > cutoff);
  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) return true;
  timestamps.push(now);
  rateLimitStore.set(ip, timestamps);
  // Периодически чистим старые IP
  if (rateLimitStore.size > 1000) {
    for (const [key, ts] of rateLimitStore.entries()) {
      if (ts.every(t => t <= cutoff)) rateLimitStore.delete(key);
    }
  }
  return false;
}

export type ApplyBody = {
  fullName: string;
  phone: string;
  englishLevel: string;
  studyLevel: string;
  address: string;
};

/** Удаляем управляющие символы, подозрительные теги и лишние пробелы */
function sanitizeText(s: string): string {
  return s
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '') // control chars
    .replace(/<[^>]*>/g, '') // HTML-like tags
    .replace(/javascript:/gi, '')
    .replace(/data:/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Телефон: только цифры, +, пробелы, скобки, дефис */
function sanitizePhone(s: string): string {
  return s.replace(/[^\d+\s\-()]/g, '').replace(/\s+/g, ' ').trim();
}

/** Допустимые значения уровня (как в форме) */
const ALLOWED_ENGLISH_LEVELS = [
  'Beginner (A1-A2)',
  'Intermediate (B1-B2)',
  'IELTS 5.5 - 6.0',
  'IELTS 6.5 - 7.0',
  'IELTS 7.5+',
];

/** Допустимые значения таълим бошқичи */
const ALLOWED_STUDY_LEVELS = ['Bakalavr', 'Magistratura', 'Foundation'];

/** Слова/фразы, при наличии которых заявку отклоняем (можно расширить через env) */
const BLOCKLIST = (process.env.APPLY_BLOCKLIST ?? '')
  .toLowerCase()
  .split(',')
  .map((w) => w.trim())
  .filter(Boolean);

function containsBlocklisted(text: string): boolean {
  if (BLOCKLIST.length === 0) return false;
  const lower = text.toLowerCase();
  return BLOCKLIST.some((word) => lower.includes(word));
}

function buildTelegramMessage(data: ApplyBody): string {
  const lines = [
    '🆕 Yangi ariza',
    '',
    `👤 Ism: ${data.fullName}`,
    `📱 Telefon: ${data.phone}`,
    `📚 Ingliz tili: ${data.englishLevel}`,
    `🎓 Ta'lim bosqichi: ${data.studyLevel}`,
    `📍 Manzil: ${data.address}`,
    '',
    new Date().toLocaleString('uz-UZ'),
  ];
  return lines.join('\n');
}

export async function POST(request: NextRequest) {
  const ip = getClientIP(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Juda ko\'p so\'rovlar. Bir daqiqa kutib qaytadan urinib ko\'ring.' },
      { status: 429 }
    );
  }

  const contentLength = request.headers.get('content-length');
  if (contentLength && parseInt(contentLength, 10) > MAX_BODY_BYTES) {
    return NextResponse.json(
      { error: 'Request too large' },
      { status: 413 }
    );
  }

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return NextResponse.json(
      { error: 'Telegram not configured (TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID)' },
      { status: 500 }
    );
  }

  let body: ApplyBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { fullName, phone, englishLevel, studyLevel, address } = body;
  if (!fullName?.trim() || !phone?.trim() || !address?.trim()) {
    return NextResponse.json(
      { error: 'fullName, phone and address are required' },
      { status: 400 }
    );
  }

  const sanitized = {
    fullName: sanitizeText(fullName),
    phone: sanitizePhone(phone),
    englishLevel: (englishLevel || '').trim(),
    studyLevel: (studyLevel || '').trim(),
    address: sanitizeText(address),
  };

  if (!sanitized.fullName || !sanitized.phone || !sanitized.address) {
    return NextResponse.json(
      { error: 'Iltimos, barcha maydonlarni to\'g\'ri to\'ldiring.' },
      { status: 400 }
    );
  }

  if (sanitized.phone.length < 9) {
    return NextResponse.json(
      { error: 'Telefon raqami juda qisqa.' },
      { status: 400 }
    );
  }

  if (!ALLOWED_ENGLISH_LEVELS.includes(sanitized.englishLevel)) {
    return NextResponse.json(
      { error: 'Ingliz tili darajasini ro\'yxatdan tanlang.' },
      { status: 400 }
    );
  }

  if (!ALLOWED_STUDY_LEVELS.includes(sanitized.studyLevel)) {
    return NextResponse.json(
      { error: 'Ta\'lim bosqichini ro\'yxatdan tanlang.' },
      { status: 400 }
    );
  }

  if (
    containsBlocklisted(sanitized.fullName) ||
    containsBlocklisted(sanitized.address)
  ) {
    return NextResponse.json(
      { error: 'Iltimos, so\'zlamalarga rioya qiling.' },
      { status: 400 }
    );
  }

  if (
    sanitized.fullName.length > MAX_FIELD_LENGTH ||
    sanitized.phone.length > MAX_FIELD_LENGTH ||
    sanitized.englishLevel.length > MAX_FIELD_LENGTH ||
    sanitized.studyLevel.length > MAX_FIELD_LENGTH ||
    sanitized.address.length > MAX_FIELD_LENGTH
  ) {
    return NextResponse.json(
      { error: 'One or more fields are too long' },
      { status: 400 }
    );
  }

  const text = buildTelegramMessage(sanitized);

  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
      }),
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      console.error('Telegram API error:', data);
      return NextResponse.json(
        { error: 'Failed to send to Telegram' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Apply API error:', err);
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}
