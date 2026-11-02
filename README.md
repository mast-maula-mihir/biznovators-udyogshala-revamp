# biznovators-udyogshala-revamp

Next.js (App Router, TypeScript) rebuild of [biznovators.in](https://www.biznovators.in).

- Bilingual: `/en` and `/mr` (Marathi). Old URLs `/`, `/index.html`, `/contact.html` redirect.
- All copy lives in `lib/content.ts`.
- No runtime dependencies beyond Next + React.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Pages

Home, About, Services, Media (53-photo gallery), Testimonials, Blog & Announcement
(links to the Blogspot blog), Presentation (4 PDFs), Contact — each in `/en` and `/mr`.
Inner-page text is as on the live site (English with Marathi sections); only nav labels switch.
**BEQ (`/SignIn.aspx`) is intentionally not ported yet.**

## Images / gallery / PDFs

Until files are local, the app loads them from the live site. To make the repo self-contained, either:

```bash
npm run assets   # downloads everything into public/ (needs normal internet access)
```

or unzip `biznovators-site-assets.zip` (saved to Downloads by the browser export) into `public/`
so you get `public/images`, `public/gallery`, `public/pdf`, `public/fav`, `public/NewCSS`.
Then create `.env.local` containing `NEXT_PUBLIC_ASSET_ROOT=` (empty value → files are served
from this app's own `/images`, `/gallery`, `/pdf`) and commit `public/`.

## Open items

- Add the two phone numbers in `lib/content.ts` (`phones`).
- Verify the address on the Contact page against the live site.
- Presentation PDF labels are inferred from file names; confirm the titles.
- Add the BEQ section.
