#! /bin/bash
rm ~/gitmpqz.github.io/assets/*
cp ~/gitmpqz.github.io/index-ref.html ~/gitmpqz.github.io/index.html
npm run build
echo 'build done'
cp -rf ~/gitmpqz.github.io/dist/* ~/gitmpqz.github.io/
echo 'cd done'
sed -i .bak -e 's:/assets:./assets:g' ~/gitmpqz.github.io/index.html
echo 'sed done'