import Link from "next/link";
import { services as s } from "@/lib/site";
import { List, Paras } from "@/components/Bits";
import type { Locale } from "@/lib/content";

export const metadata = { title: "Services | Biznovators" };

export default async function Services({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.tagline}</p>
      <h2>{s.providedTitle}</h2>
      <List items={s.provided} />

      <h2>{s.expertiseTitle}</h2>
      <div className="grid">
        {s.blocks.map((b) => (
          <article className="card" key={b.h}>
            <h3>{b.h}</h3>
            {"sub" in b && b.sub ? <p>{b.sub}</p> : null}
            {"list" in b && b.list ? <List items={b.list} /> : null}
            {"paras" in b && b.paras ? <Paras items={b.paras} /> : null}
            {"note" in b && b.note ? <p><strong>{b.note}</strong></p> : null}
            {"links" in b && b.links
              ? b.links.map((l) => (
                  <p key={l.href}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                  </p>
                ))
              : null}
          </article>
        ))}
      </div>

      <h2>{s.teamTitle}</h2>
      <List items={s.team} />
      <p>{s.aims}</p>
      <p>{s.further}</p>
      <p>
        <strong>{s.presentationsCta}</strong>{" "}
        <Link href={`/${locale}/presentation`}>Click to open</Link>
      </p>
    </>
  );
}
