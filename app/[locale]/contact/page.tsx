import { copy, email, phones, type Locale } from "@/lib/content";
import Social from "@/components/Social";

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const c = copy[locale].contact;

  return (
    <>
      <h1>{c.title}</h1>
      <dl className="contact">
        <dt>{c.address}</dt>
        <dd>
          {c.addressLines.map((l) => (
            <div key={l}>{l}</div>
          ))}
        </dd>

        <dt>{c.call}</dt>
        <dd>
          {phones.length === 0 ? (
            <span className="muted">—</span>
          ) : (
            phones.map((p) => (
              <div key={p}>
                <a href={`tel:${p.replace(/\s+/g, "")}`}>{p}</a>
              </div>
            ))
          )}
        </dd>

        <dt>{c.email}</dt>
        <dd>
          <a href={`mailto:${email}`}>{email}</a>
        </dd>
      </dl>

      <h2>{c.touch}</h2>
      <Social />
    </>
  );
}
