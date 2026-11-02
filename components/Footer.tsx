import { copy, type Locale } from "@/lib/content";

export default function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="site">
      <div className="wrap">
        © {new Date().getFullYear()} Biznovators | {copy[locale].rights}
      </div>
    </footer>
  );
}
