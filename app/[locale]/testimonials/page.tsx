import { testimonials } from "@/lib/site";

export const metadata = { title: "Testimonials | Biznovators" };

export default function Testimonials() {
  return (
    <>
      <h1>Testimonials</h1>
      {testimonials.map((t) => (
        <figure className="quote" key={t.name} lang={t.lang}>
          <figcaption>
            <strong>{t.name}</strong>
            {t.role ? <div className="muted">{t.role}</div> : null}
          </figcaption>
          {t.text.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </figure>
      ))}
    </>
  );
}
