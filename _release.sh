#!/bin/zsh

rm -rf src/
rm -rf public/
rm .eslintrc*
rm .prettierrc
rm package*
mv docs/* .
rm -r docs