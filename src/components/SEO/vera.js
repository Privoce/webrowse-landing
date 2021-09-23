import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
const defaultTitle = 'Vera - Watch videos together with your friends';
const defaultDescription = 'Vera synchronizes video playback and adds live chat to your favorites video websites such as Youtube'
const defaultImage = 'https://static.nicegoodthings.com/works/vera/popup.vera.logo.png';
const titleTemplate = "%s | Vera Landing Page";
const twitterUsername = '@privoce1'
const SEO = ({ title = "", description = "", lang = 'en', image = "", article = false }) => {
  const { pathname } = useLocation()
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: `${location.origin}${pathname}`,
  }

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={seo.title}
      titleTemplate={titleTemplate}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="icon"
        type="image/png"
        href="https://static.nicegoodthings.com/works/vera/popup.vera.logo.png" />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {article && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  lang: `en`,
  article: false,
}
