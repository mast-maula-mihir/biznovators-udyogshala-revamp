import { assetUrl, media } from "@/lib/site";

export const metadata = { title: "Media | Biznovators" };

export default function Media() {
  return (
    <>
      <h1>{media.title}</h1>
      <p className="muted">{media.caption}</p>
      <div className="gallery">
        {media.items.map((m, i) => (
          <a key={m.full} href={assetUrl(m.full)} target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assetUrl(m.thumb)} alt={`Event photo ${i + 1}`} loading="lazy" />
          </a>
        ))}
      </div>
    </>
  );
}
