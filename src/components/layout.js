import React, { useState } from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import './base.css'
import Container from './container'
import Navigation from './sayless/navigation/navigation'
import Footer from '../components/sayless/footer/footer'
import { Transition } from "react-spring/renderprops-universal";
import { Helmet } from 'react-helmet';
import openGraphImg from "../assets/icons/say-less-image-graph.jpg"

class Template extends React.Component {

  
  render() {
    const { location, children } = this.props
    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`

    }

    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const metadata = get(this, 'props.data.site.siteMetadata.description');
    console.log(metadata)
    const posts = get(this, 'props.data.allContentfulBlogPost.edges');
    const headerText = get(this, 'props.data.allContentfulHomePageText.nodes[0].title.title');


    const reactHelmet = (
      <Helmet title={siteTitle} defer={false}>
        <title>Say Less Design Studio"</title>
        <meta content={metadata} name="description" />
        <meta property="og:url" content="https://sayless.studio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`https://sayless.studio${openGraphImg}`} />
        <meta property="og:title" content={siteTitle} />
        <meta property='og:description' content={metadata} />
        <meta name='twitter:title' content={siteTitle} />
        <meta name='twitter:description' content={metadata} />
        <meta name='twitter:image' content={`https://sayless.studio${openGraphImg}`} />
        <meta name='twitter:card' content={`https://sayless.studio${openGraphImg}`} />
        <meta name='twitter:site' content="@theolivewave" />
      </Helmet>
    )

    const templateBody = (props) => {
      return (
        <body style={props}>
          {rootPath == '/' && reactHelmet}
          <Navigation />
          <Container>
            {children}
          </Container>
          <Footer />
        </body>
      )
    }

    const transitionFactory = (component) => {
      return (
        <Transition
          items={true}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}>
          {show => show && (props => component(props))}
        </Transition>
      )
    }

    return transitionFactory(templateBody)

  }
}

export default Template
