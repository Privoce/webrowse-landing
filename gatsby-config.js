/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Webrowse",
    titleTemplate: "%s | Sync tabs with your teammates!",
    description: "Turn any web app collaborative instantly. Create a shared workspace among your team with browser tabs synced in real time.s",
    siteUrl: "https://webrow.se",
    author: "Tristan Yang",
    authorSite: "https://yangerxiao.com",
    image: "/image.tpl.png",
    twitterUsername: "@privoce1",
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: path.join(__dirname, `src`, `images`),
    //   },
    // },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-7Z6E87LCXJ"],
      },
    }
  ],
}
