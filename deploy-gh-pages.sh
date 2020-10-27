# abort on errors
set -e

# build
npm run build

# cd ind i build
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:danielarnason/kort.git vue:gh-pages

cd -