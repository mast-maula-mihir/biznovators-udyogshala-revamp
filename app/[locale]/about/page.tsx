import { about, assetUrl } from "@/lib/site";
import { List, Paras } from "@/components/Bits";

export const metadata = { title: "About | Biznovators" };

export default function About() {
  const a = about;
  return (
    <>
      <h1>About Us</h1>

      <h2>{a.history.title}</h2>
      <p>{a.history.text}</p>

      <h2>{a.specialities.title}</h2>
      <p>{a.specialities.text}</p>

      <h2>{a.founder.title}</h2>
      <div className="founder">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={assetUrl(a.founder.photo)} alt={a.founder.name} />
        <div>
          <h3>{a.founder.name}</h3>
          <p className="lead">{a.founder.tagline}</p>
        </div>
      </div>
      <Paras items={a.founder.paras} />

      <section lang="mr" className="letter">
        <h2>{a.marathi.title}</h2>
        <ul>
          {a.marathi.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <h3>{a.marathi.skillsTitle}</h3>
        <List items={a.marathi.skills} />
        <h3>{a.marathi.notableTitle}</h3>
        <List items={a.marathi.notable} />
        <h3>{a.marathi.venturesTitle}</h3>
        <ul>
          {a.marathi.ventures.map((v) => (
            <li key={v.name}>
              <strong>{v.name}</strong>
              {v.text ? <> — {v.text}</> : null}
            </li>
          ))}
        </ul>
      </section>

      <div className="photos">
        {a.gallery.map((g) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={g} src={assetUrl(g)} alt="" loading="lazy" />
        ))}
      </div>

      <h2>{a.training.title}</h2>
      {a.training.modules.map((m) => (
        <article key={m.h}>
          <h3>{m.h}</h3>
          <Paras items={m.p} />
          {"list" in m && m.list ? <List items={m.list} /> : null}
        </article>
      ))}

      <h2>{a.udyogshalam.title}</h2>
      <h3>{a.udyogshalam.about.h}</h3>
      <p>{a.udyogshalam.about.p}</p>
      <h3>{a.udyogshalam.vision.h}</h3>
      <Paras items={a.udyogshalam.vision.p} />
      <List items={a.udyogshalam.vision.list} />

      <h2>{a.shchem.title}</h2>
      <p className="muted">{a.shchem.subtitle}</p>
      <h3>Specialities</h3>
      <List items={a.shchem.specialities} />
      <h3>What we are</h3>
      <Paras items={a.shchem.what} />
      <List items={a.shchem.techGroup} />
      <p>{a.shchem.mgmtIntro}</p>
      <List items={a.shchem.mgmtGroup} />
      <h3>We Offer</h3>
      {a.shchem.offer.map((o) => (
        <div key={o.h}>
          <p>
            <strong>{o.h}</strong>
          </p>
          {"list" in o && o.list ? <List items={o.list} /> : null}
        </div>
      ))}
      <h3>{a.shchem.completedTitle}</h3>
      <p>{a.shchem.completedIntro}</p>
      <List items={a.shchem.completed} />

      <h2>{a.artestra.title}</h2>
      <Paras items={a.artestra.paras} />

      <h2>{a.directors.title}</h2>
      <div className="grid">
        {a.directors.people.map((p) => (
          <article className="card" key={p.name}>
            <h3>{p.name}</h3>
            <p>{p.text}</p>
          </article>
        ))}
      </div>
      <p>{a.directors.note}</p>

      <h2>{a.team.title}</h2>
      <Paras items={a.team.paras} />
    </>
  );
}
