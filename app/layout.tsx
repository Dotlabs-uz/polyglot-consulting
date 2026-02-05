import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Instrument_Serif } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-instrument-serif',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: "Polyglot Consulting - Global Ta'lim Agentligi",
  description: "Xalqaro ta'lim agentligi - 600+ universitetlar, 10+ davlatlar, viza yordami",
  ...(siteUrl && { metadataBase: new URL(siteUrl) }),
  openGraph: {
    title: "Polyglot Consulting - Global Ta'lim Agentligi",
    description: "Xalqaro ta'lim agentligi - 600+ universitetlar, 10+ davlatlar, viza yordami",
    siteName: "Polyglot Consulting",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "/first.jpeg",
        width: 1200,
        height: 630,
        alt: "Polyglot Consulting - Chet elda o'qish agentligi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Polyglot Consulting - Global Ta'lim Agentligi",
    description: "Xalqaro ta'lim agentligi - 600+ universitetlar, 10+ davlatlar, viza yordami",
    images: ["/first.jpeg"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body className={`${plusJakarta.variable} ${instrumentSerif.variable} font-sans text-slate-900 overflow-x-hidden antialiased`}>
        {children}
      </body>
    </html>
  );
}
