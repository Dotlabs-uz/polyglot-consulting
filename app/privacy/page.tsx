import Link from "next/link";
import { Logo } from "@/components/Logo";

export const metadata = {
  title: "Maxfiylik siyosati | Polyglot Consulting",
  description: "Polyglot Consulting maxfiylik siyosati — shaxsiy ma'lumotlaringiz qanday to'planishi va himoya qilinishi.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-100 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </Link>
          <Link
            href="/"
            className="text-sm font-bold text-slate-600 hover:text-[#1a237e]"
          >
            ← Bosh sahifa
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
          Maxfiylik siyosati
        </h1>
        <p className="text-slate-500 text-sm mb-10">
          Oxirgi yangilanish: 2025
        </p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              1. Umumiy qoidalar
            </h2>
            <p>
              Polyglot Consulting (&quot;Agentlik&quot;, &quot;biz&quot;) Oʻzbekiston Respublikasining
              qonunlariga, jumladan shaxsiy maʼlumotlar toʻgʻrisidagi qonunlarga
              muvofiq shaxsiy maʼlumotlaringizni qayta ishlaydi va himoya qiladi.
              Ushbu maxfiylik siyosati veb-sayt orqali yigʻiladigan maʼlumotlar va
              ularning qanday ishlatilishini tushuntiradi.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              2. Yigʻiladigan maʼlumotlar
            </h2>
            <p className="mb-3">Biz quyidagi maʼlumotlarni toʻplashimiz mumkin:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Ism-familiya</li>
              <li>Aloqa maʼlumotlari (telefon raqami, elektron pochta)</li>
              <li>Yashash manzili (shahar, tuman)</li>
              <li>Taʼlim darajasi yoki til darajasi haqida maʼlumotlar (masalan, ariza formasida)</li>
              <li>Brauzer va qurilma haqida texnik maʼlumotlar (IP, cookie)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              3. Maqsadlar
            </h2>
            <p>
              Shaxsiy maʼlumotlardan xalqaro taʼlim va konsultatsiya xizmatlarini
              koʻrsatish, arizalaringizga javob berish, aloqa qilish va qonuniy
              talablar bajarilishi uchun foydalanamiz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              4. Maʼlumotlarning himoyasi
            </h2>
            <p>
              Maʼlumotlaringiz maxfiyligini taʼminlash uchun texnik va tashkiliy
              choralar qoʻllanadi. Uchinchi shaxslarga faqat sizning roziligingiz
              yoki qonunda koʻzda tutilgan hollarda maʼlumot uzatiladi.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              5. Huquqlaringiz
            </h2>
            <p className="mb-3">
              Siz oʻz maʼlumotlaringizga kirish, tuzatish, oʻchirish yoki qayta
              ishlashni cheklashni soʻrash huquqiga egasiz. Soʻrovlaringizni
              quyidagi manzil orqali yuborishingiz mumkin.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              6. Bogʻlanish
            </h2>
            <p>
              Maxfiylik boʻyicha savollar uchun: Samarkand shahar, Gagarin 150;
              telefon: +998 91 708 32 22; Telegram:{" "}
              <a
                href="https://t.me/Polyglot_Consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a237e] font-semibold hover:underline"
              >
                @Polyglot_Consulting
              </a>
              .
            </p>
          </section>
        </div>

        <p className="mt-12 text-slate-500 text-sm">
          Ushbu siyosat vaqt-vaqt bilan yangilanishi mumkin. Oʻzgarishlar ushbu
          sahifada eʼlon qilinadi.
        </p>
      </main>
    </div>
  );
}
