#!/usr/bin/env sh
 
# ȷ���ű��׳������Ĵ���
set -e
rm -rf dist
# ���ɾ�̬�ļ� ,
# yarn docs:build
npm run docs:build
#rm -rf ../blog/dist

# ��build���ɵ�distĿ¼��������һ��Ŀ¼��
#cp -rf dist ../blog/

# �������ɵ��ļ���
#cd ../blog/dist

# git��ʼ����ÿ�γ�ʼ����Ӱ������
git init
git add -A
git commit -m 'deploy'
git branch -M main

# �������Ҫ���� https://USERNAME.github.io
#git push -f git@github.com:jk-ty/jkty.github.io/.git main
git remote add origin git@github.com:jk-ty/jk-ty.github.io.git
git push -u origin main