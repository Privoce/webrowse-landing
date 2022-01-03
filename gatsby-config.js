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
    description: "Turn any web app collaborative instantly. Create a shared workspace among your team with browser tabs synced in real time.",
    siteUrl: "https://webrow.se",
    author: "Tristan Yang",
    authorSite: "https://yangerxiao.com",
    image: "https://lh5.googleusercontent.com/O06ExS3V904VFHlf_EsWRbUHuyFl9EwsZX9yCBLRianmEZ4u-dgN2Od6ac1oaCcjONXgrAI6LCqcmFxg4Ltk=w3360-h1826-rw",
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
