#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")/.."
TECTONIC_BIN="${TECTONIC_BIN:-tectonic}"
TEX_BUNDLE_URL="${TEX_BUNDLE_URL:-https://data1.fullyjustified.net/tlextras-2022.0r0.tar}"
"$TECTONIC_BIN" --bundle "$TEX_BUNDLE_URL" --outdir public research_cv.tex
mv public/research_cv.pdf public/cv.pdf
printf 'Updated public/cv.pdf from research_cv.tex\n'
