# Gatsby GitHub Stats

A website that tracks the last two weeks of statistics about the [gatsbyjs/gatsby](https://github.com/gatsbyjs/gatsby) repo.

This is an unnofficial project and not maintained by the Gatsby Core Team.

## GitHub Action

To update the stats, a GitHub Action was created to pull data down from a Firebase Firestore database. It then stores it in a JS file which is loaded into the site. This action is run on an hourly basis.
