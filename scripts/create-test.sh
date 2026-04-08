#!/bin/bash

NAME=$1

mkdir -p tests/$NAME
touch tests/$NAME/index.html
touch assets/data/$NAME.js

echo "Test $NAME creado 🚀"