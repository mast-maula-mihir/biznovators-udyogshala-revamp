import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import "../globals.css";
import { copy, locales, type Locale } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const c = copy[locale as Locale];
  return {
    title: c.siteTitle,
    description: "BIZNOVATORS",
    keywords:
      "Biznovators, S.H.Chem, Udyogshala, DelAArestra, Market Research, Harshvardhan Vinit Ranade, Harsh, Pune",
    other: {
      // carried over from the original site's <head>
      "facebook-domain-verification": "h9g9mt6xh7e0dv6mcjw5nj0txfz5z0",
    },
    alternates: {
      languages: { en: "/en", mr: "/mr" },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  return (
    <html lang={locale} className={`${inter.variable} ${devanagari.variable}`}>
      <body>
        <Header locale={locale as Locale} />
        <main className="wrap">{children}</main>
        <Footer locale={locale as Locale} />
      </body>
    </html>
  );
}
