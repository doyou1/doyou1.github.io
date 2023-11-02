#!/bin/bash
git checkout dev
git pull

git checkout release
git merge dev --no-edit

rm -rf ./docs/react
rm -rf ./docs/vue

mkdir ./docs/react
mkdir ./docs/vue

cd front-react
npm run build
cd ..

cd front-vue-ts
npm run build
cd ..

mv ./front-react/dist/* ./docs/react
mv ./front-vue-ts/dist/* ./docs/vue

git add .
git commit -m "deploy"
git push