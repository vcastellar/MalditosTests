#!/usr/bin/env bash
set -euo pipefail

NAME="${1:-}"

if [[ -z "$NAME" ]]; then
  echo "Uso: $0 <nombre-del-test>"
  exit 1
fi

mkdir -p "tests/$NAME"
mkdir -p "assets/data"
touch "tests/$NAME/index.html"
touch "assets/data/$NAME.js"

echo "Test \"$NAME\" creado 🚀"
