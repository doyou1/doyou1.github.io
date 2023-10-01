#!/bin/bash

cd front-react
npm run build
cd ..

cd front-vue
npm run build
cd ..

mv ./front-react/dist/* ./docs/react

mv ./front-vue/dist/* ./docs/vue