#!/bin/zsh
# for dev-* branch

rm -rf src/
rm -rf public/
rm .eslintrc*
rm .prettierrc
rm package*
mv build/* .
rm -r build