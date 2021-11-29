/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Webrowse",
    titleTemplate: "%s | Webrowse landing page",
    description: "sync tabs with you teammates",
    siteUrl: "https://webrow.se",
    author: "Tristan Yang",
    authorSite: "https://yangerxiao.com",
    image: "/image.tpl.png",
    twitterUsername: "@privoce1",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
