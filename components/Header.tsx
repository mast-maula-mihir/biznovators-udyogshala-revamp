import Link from "next/link";
import { ASSET_BASE, copy, type Locale } from "@/lib/content";

export default function Header({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const other: Locale = locale === "en" ? "mr" : "en";
  return (
    <header className="site">
      <div className="wrap">
        <Link href={`/${locale}`} aria-label="Biznovators">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${ASSET_BASE}/logo.png`} alt="Biznovators" />
        </Link>
        <nav className="site">
          <Link href={`/${locale}`}>{c.nav.home}</Link>
          <Link href={`/${locale}/contact`}>{c.nav.contact}</Link>
          <Link className="lang" href={`/${other}`} hrefLang={other}>
            {c.nav.switch}
          </Link>
        </nav>
      </div>
    </header>
  );
}
