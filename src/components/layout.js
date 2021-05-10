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
    const { location, children, landing, useLandingBoolean } = this.props
    console.log("What is the boolean", useLandingBoolean)
    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`

    }

    console.log("ARE WE USING LANDING PAGE", useLandingBoolean);

    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const metadata = get(this, 'props.data.site.siteMetadata.description');
    console.log(metadata)
    const posts = get(this, 'props.data.allContentfulBlogPost.edges');
    const headerText = get(this, 'props.data.allContentfulHomePageText.nodes[0].title.title');


    const templateBody = (props) => {
      return (
        <body style={props}>
          <Navigation landing={landing} useLandingBoolean={useLandingBoolean} />
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
