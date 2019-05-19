cd $GITHUB_WORKSPACE

node /load-data.js > site/js/data.js

git config user.name "GitHub Action Bot"
git config user.email "<>"

git add site/js/data.js

git commit -m "Updating data.js"
git push origin HEAD:master