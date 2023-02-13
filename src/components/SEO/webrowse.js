import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
const defaultTitle = "Webrowse - sync tabs during remote teaching";
const defaultDescription =
  "Turn any web app collaborative instantly. Create a shared workspace among your team with browser tabs synced in real time.";
const defaultKeywords = "web, chrome extension, collaboration, remote work";
const defaultImage = "https://static.nicegoodthings.com/project/ext/og.png";
const titleTemplate = "%s";
const twitterUsername = "@privoce1";
const SEO = ({
  title = "",
  description = "",
  keywords = "",
  lang = "en",
  image = "",
  article = false,
}) => {
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    keywords: keywords || defaultKeywords,
    image: image || defaultImage,
    url: `https://webrow.se`,
  };

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={seo.title}
      titleTemplate={titleTemplate}
    >
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="image" content={seo.image} />
      <link
        rel="icon"
        type="image/png"
        href="https://static.nicegoodthings.com/project/ext/webrowse.logo.png"
      />

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
      <script type="application/ld+json">
        {`{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Webrowse",
        "operatingSystem": "CHROME",
        "applicationCategory": "BrowserApplication",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "ratingCount": "1"
        },
        "offers": {
            "@type": "Offer",
            "price": "0"

        }
    }`}
      </script>
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  lang: `en`,
  article: false,
};
