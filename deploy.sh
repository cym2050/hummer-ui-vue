rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
if [ $1 = 'gitee' ]
then
    git remote add $1 git@gitee.com:cym2050/hummer-ui-vue.git
elif [ $1 = 'origin']
then
    git remote add $1 git@github.com:cym2050/hummer-ui-vue.git
else
    echo '参数错误'
    exit
fi
git push -f -u $1 master 
cd ..
echo http://cym2050.gitee.io/hummer-ui-vue