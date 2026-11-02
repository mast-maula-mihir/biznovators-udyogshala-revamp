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

## Images

By default images hotlink `https://www.biznovators.in/images/...` so the site
works immediately. To make the repo self-contained:

```bash
npm run assets                      # downloads into public/images
echo 'NEXT_PUBLIC_ASSET_BASE=/images' > .env.local
```

Then commit `public/images`.

## Open items

- Add the two phone numbers in `lib/content.ts` (`phones`).
- Verify the address on the Contact page against the live site.
- Not yet ported: any pages not linked from the home page (only Home and Contact were reachable).
