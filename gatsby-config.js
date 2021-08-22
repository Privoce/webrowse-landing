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
    siteUrl: "https://thestartup.netlify.com",
    author: "Tristan Yang",
    authorSite: "https://yangerxiao.com",
    image: "/yellow-metal-design-decoration.jpg",
    twitterUsername: "@ygc",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}
