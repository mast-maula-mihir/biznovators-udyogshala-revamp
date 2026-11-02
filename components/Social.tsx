import { ASSET_BASE, social } from "@/lib/content";

export default function Social() {
  return (
    <ul className="social">
      {social.map((s) => (
        <li key={s.href}>
          <a href={s.href} target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${ASSET_BASE}/snsico/${s.icon}.png`} alt="" />
            <span>{s.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
