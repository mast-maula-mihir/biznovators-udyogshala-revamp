#!/usr/bin/env bash
# Copies the site's images into public/images so the app no longer hotlinks
# the live site. Run from the repo root on a machine with normal internet:
#   npm run assets
set -euo pipefail
BASE="https://www.biznovators.in/images"
DEST="$(dirname "$0")/../public/images"
mkdir -p "$DEST/snsico"

files=(
  top.png logo.png h2info.png info_graphic3.png
  logo_shc.png logo_biznovators.png logo_udyogshalam.png logo_art.png logo_edf.png
  snsico/fb.png snsico/link.png snsico/yt.png
)
for f in "${files[@]}"; do
  echo "↓ $f"
  curl -fsSL "$BASE/$f" -o "$DEST/$f"
done

# Favicons referenced by the original <head>
mkdir -p "$DEST/../fav"
curl -fsSL "https://www.biznovators.in/fav/favicon.ico" -o "$DEST/../fav/favicon.ico" || true

echo
echo "Done. Now set NEXT_PUBLIC_ASSET_BASE=/images in .env.local (see README)."
