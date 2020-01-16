import React from "react"
import PropTypes from "prop-types"
import image from "../public/assets/icons/say-less-image-graph.jpg"

export default function HTML(props) {
  const siteMetadata = {
    title: 'Say Less Design Studio',
    description: "Say Less is a Digital Design Studio helmed by Philadelphia, PA based creatives Cheyenne Jacobs and Randi Bellamy",
    url: "https://www.sayless.studio", // No trailing slash allowed!
    image: "image", // Path to your image you placed in the 'static' folder
    twitterUsername: "@sayless_studio",
  }
  return (
    <html {...props.htmlAttributes}>
      <head>
        <title>Say Less Design Studio</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta content={siteMetadata.description} name="description" />
        <meta property="og:url" content={siteMetadata.url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteMetadata.url}${image}`} />
        <meta property="og:title" content={siteMetadata.title} />
        <meta property='og:description' content={siteMetadata.description} />
        <meta name='twitter:title' content={siteMetadata.title} />
        <meta name='twitter:description' content={siteMetadata.description} />
        <meta name='twitter:image' content={`${siteMetadata.url}${image}`} />
        <meta name='twitter:card' content="summary" />
        <meta name='twitter:site' content={siteMetadata.twitterUsername} />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
