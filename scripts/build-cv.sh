#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")/.."
TECTONIC_BIN="${TECTONIC_BIN:-tectonic}"
TEX_BUNDLE_URL="${TEX_BUNDLE_URL:-https://data1.fullyjustified.net/tlextras-2022.0r0.tar}"

build_research() {
  "$TECTONIC_BIN" --bundle "$TEX_BUNDLE_URL" --outdir public research_cv.tex
  mv public/research_cv.pdf public/cv.pdf
  printf 'Updated public/cv.pdf from research_cv.tex\n'
}

build_engineer() {
  "$TECTONIC_BIN" --bundle "$TEX_BUNDLE_URL" --outdir public engineer_cv.tex
  printf 'Updated public/engineer_cv.pdf from engineer_cv.tex\n'
}

case "${1:-all}" in
  all)
    build_research
    build_engineer
    ;;
  research) build_research ;;
  engineer) build_engineer ;;
  *)
    printf 'Usage: %s [all|research|engineer]\n' "$0" >&2
    exit 2
    ;;
esac
