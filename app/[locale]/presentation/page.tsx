import { assetUrl, presentations } from "@/lib/site";

export const metadata = { title: "Presentation | Biznovators" };

export default function Presentation() {
  return (
    <>
      <h1>Presentation</h1>
      <p className="muted">Browse presentations</p>
      <ul className="files">
        {presentations.map((p) => (
          <li key={p.file}>
            <a href={assetUrl(p.file)} target="_blank" rel="noopener noreferrer">
              {p.label} <span className="muted">(PDF)</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
