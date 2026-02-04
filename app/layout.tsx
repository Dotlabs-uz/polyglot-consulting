import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: "Polyglot Consulting - Global Ta'lim Agentligi",
  description: "Xalqaro ta'lim agentligi - 600+ universitetlar, 10+ davlatlar, viza yordami",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body className={`${plusJakarta.variable} font-sans text-slate-900 overflow-x-hidden antialiased`}>
        {children}
      </body>
    </html>
  );
}
