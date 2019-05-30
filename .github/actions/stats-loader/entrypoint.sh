#!/bin/bash

cd $GITHUB_WORKSPACE

ls -lah /
node /load-data.js > src/data/data.json

git config user.name "GitHub Action Bot"
git config user.email "<>"

git add src/data/data.json

git commit -m "Updating data.json"
git push origin HEAD:master