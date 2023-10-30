rm -rf dist
npm run docs:build
git init
git add -A
git commit -m 'deploy'
git remote add origin git@gitee.com:nfer/nfer.git
git push -u origin "master"