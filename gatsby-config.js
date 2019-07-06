const path = require("path")

module.exports = {
  siteMetadata: {
    title: "Gatsby Stats",
    source: "https://github.com/lannonbr/gatsby-github-stats",
    repoNameWithOwner: "gatsbyjs/gatsby",
  },
  plugins: [
    {
      resolve: `gatsby-theme-github-stats`,
      options: {
        dataPath: path.join(__dirname, `src`, `data`),
      },
    },
  ],
}
