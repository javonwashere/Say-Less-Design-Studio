import React, {useState} from 'react'
import { Link } from 'gatsby'
import './base.css'
import Container from './container'
import Navigation from './sayless/navigation/navigation'
import Footer from '../components/sayless/footer/footer'
import Menu from "./sayless/navigation/menu";
import {Transition} from "react-spring/renderprops-universal";

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    const templateBody = (props) => {
      return (
          <body style={props}>
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
