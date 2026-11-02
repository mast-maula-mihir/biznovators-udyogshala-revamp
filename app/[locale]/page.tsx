import { ASSET_BASE, copy, ventures, type Locale } from "@/lib/content";
import Social from "@/components/Social";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const c = copy[locale];

  return (
    <>
      <section className="hero">
        <h1>{c.intro}</h1>
        <p className="lead">{c.belief}</p>
        <p className="muted">{c.domains}</p>
      </section>

      <section className="letter" lang={locale}>
        <h2>{c.letterTitle}</h2>
        {c.letter.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
        <p className="signoff">{c.signoff}</p>
      </section>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="infographic"
        src={`${ASSET_BASE}/info_graphic3.png`}
        alt=""
      />

      <section className="grid" aria-label="Ventures">
        {ventures.map((v) => (
          <article className="card" key={v.logo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${ASSET_BASE}/${v.logo}`} alt="" />
            <h3>{v.name[locale]}</h3>
            <p>{v.desc[locale]}</p>
          </article>
        ))}
      </section>

      <h2>{c.follow}</h2>
      <Social />
    </>
  );
}
