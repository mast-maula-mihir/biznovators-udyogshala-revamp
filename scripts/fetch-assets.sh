#!/usr/bin/env bash
# Copies the site's images/gallery/PDFs into public/ so the app no longer
# hotlinks the live site. Run from the repo root on a machine with normal internet:
#   npm run assets
# Then set NEXT_PUBLIC_ASSET_ROOT= (empty path root) — see README.
set -uo pipefail
BASE="https://www.biznovators.in"
DEST="$(cd "$(dirname "$0")/.." && pwd)/public"
mkdir -p "$DEST/images/snsico" "$DEST/gallery/vlb_images1" "$DEST/gallery/vlb_thumbnails1" "$DEST/pdf" "$DEST/fav"

get() { # path
  [ -s "$DEST/$1" ] && return 0
  echo "↓ $1"
  curl -fsSL "$BASE/$1" -o "$DEST/$1" || { echo "  ✗ failed: $1"; rm -f "$DEST/$1"; }
}

for f in top logo h2info info_graphic3 logo_shc logo_biznovators logo_udyogshalam logo_art logo_edf; do get "images/$f.png"; done
for f in fb link yt; do get "images/snsico/$f.png"; done
get images/director.jpg

# gallery + about-page photos, derived from lib/site.ts
node --experimental-strip-types -e '
import("./lib/site.ts").then(m => { for (const p of m.allAssetPaths) console.log(p) })
' 2>/dev/null | while read -r p; do get "$p"; done
