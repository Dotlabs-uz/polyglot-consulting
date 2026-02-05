import Link from "next/link";
import { Logo } from "@/components/Logo";

export const metadata = {
  title: "Foydalanish shartlari | Polyglot Consulting",
  description: "Polyglot Consulting veb-sayti foydalanish shartlari.",
};

export default function TermsPage() {
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
          Foydalanish shartlari
        </h1>
        <p className="text-slate-500 text-sm mb-10">
          Oxirgi yangilanish: 2025
        </p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              1. Umumiy shartlar
            </h2>
            <p>
              Ushbu veb-sayt Polyglot Consulting (&quot;Agentlik&quot;) tomonidan boshqariladi.
              Saytdan foydalanish orqali siz ushbu foydalanish shartlariga rozilik
              bildirasiz. Oʻzbekiston Respublikasi qonunlariga muvofiq, xizmatlar
              va munosabatlar Oʻzbekiston Respublikasi Fuqarolik kodeksi va boshqa
              qonun hujjatlariga binoan tartibga solinadi.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              2. Xizmatlar
            </h2>
            <p>
              Agentlik chet elda taʼlim olish, universitetlar tanlash, hujjatlar
              tayyorlash va viza masalalari boʻyicha maslahat xizmatlarini
              taqdim etadi. Sayt orqali yuborilgan arizalar Agentlik tomonidan
              koʻrib chiqiladi va aloqa maʼlumotlari asosida siz bilan bogʻlaniladi.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              3. Foydalanuvchi majburiyatlari
            </h2>
            <p className="mb-3">Saytdan foydalanuvchi quyidagilarga rioya qilishi shart:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Toʻgʻri va toʻliq maʼlumot kiritish</li>
              <li>Sayt va xizmatlardan faqat qonuniy maqsadlarda foydalanish</li>
              <li>Boshqalar huquqlarini hurmat qilish va zarar yetkazmaslik</li>
              <li>Agentlikning intellektual mulk huquqlarini buzmaslik</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              4. Mulk huquqi va kontent
            </h2>
            <p>
              Saytdagi matnlar, logotiplar, dizayn va boshqa materiallar
              Agentlik yoki litsenziya egasiga tegishli. Ular ruxsatsiz nusxalash,
              tarqatish yoki tijoriy maqsadlarda ishlatish taqiqlanadi.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              5. Masʼuliyat cheklovi
            </h2>
            <p>
              Agentlik saytda keltirilgan maʼlumotlarning toʻliq aniqligi va
              yangiligi uchun kafolat bermaydi. Universitetlar, stipendiyalar va
              viza qoidalari oʻzgarishi mumkin. Yakuniy qarorlar va hujjatlar
              rasmiy manbalar va Agentlik bilan yozma shartnomalar asosida
              amalga oshiriladi.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              6. Oʻzgarishlar
            </h2>
            <p>
              Agentlik ushbu foydalanish shartlarini oldindan eʼlon qilmasdan
              oʻzgartirish huquqini oʻzida saqlab qoladi. Oʻzgarishlar saytda
              chop etilgach kuchga kiradi. Saytdan davomiy foydalanish yangi
              shartlarga rozilik hisoblanadi.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              7. Bogʻlanish
            </h2>
            <p>
              Savollar uchun: Samarkand shahar, Gagarin 150; telefon: +998 91 708 32 22;
              Telegram:{" "}
              <a
                href="https://t.me/Polyglot_Consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a237e] font-semibold hover:underline"
              >
                @Polyglot_Consulting
              </a>
              ; kanal:{" "}
              <a
                href="https://t.me/Polyglot_Consulting_Agency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1a237e] font-semibold hover:underline"
              >
                Polyglot Consulting Agency
              </a>
              .
            </p>
          </section>
        </div>

        <p className="mt-12 text-slate-500 text-sm">
          Ushbu shartlar vaqt-vaqt bilan yangilanishi mumkin. Muntazam tekshirib
          turing.
        </p>
      </main>
    </div>
  );
}
