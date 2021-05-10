import React, { useState } from 'react'
import { Link } from 'gatsby'
import './navigation.css'
import './hamburgs.css'
import SaylessSymbol from '../../../assets/icons/sayless-symbol.png'
import SaylessSymbol2 from '../../../assets/icons/sl-icon.png'
import SaylessSymbol3 from '../../../assets/icons/sl-icon-gs.png'

import Menu from './menu'
import { Transition } from 'react-spring/renderprops-universal'

export default (props) => {
  const { landing, useLandingBoolean } = props
  const [menuToggle, setMenuToggle] = useState(true)

  const toggleMenu = () => {
    setMenuToggle(!menuToggle)
  }

  const MenuBar = (
    <React.Fragment>
      <div className="menu-bar"></div>
      <div className="menu-bar"></div>
      <div className="menu-bar"></div>
    </React.Fragment>
  )

  return (
    <nav className="navigation">
      {
        <Transition
          items={menuToggle}
          from={{ position: 'absolute', opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {(menuToggle) =>
            menuToggle
              ? (props) => <div style={props}></div>
              : (props) => <Menu style={props} toggleMenu={toggleMenu} />
          }
        </Transition>
      }
      <container className="nav-container">
        <div className="navigationWrapper">
          <div className="navigationList">
            {useLandingBoolean === true ? (
              <React.Fragment>
                <h4
                  style={{
                    zIndex: 1000,
                    margin: 0,
                    color: 'white',
                    textTransform: 'uppercase',
                  }}
                >
                  {landing.title}
                </h4>
                <Link style={{ zIndex: 2000 }}>
                  <img
                    style={{ filter: 'brightness(0) invert(1)' }}
                    className="sayless-symbol"
                    src={SaylessSymbol3}
                  />
                </Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link style={{ zIndex: 1000 }} to="/">
                  <img className="sayless-symbol" src={SaylessSymbol2} />
                </Link>
                <div className="navigationItem" onClick={toggleMenu}>
                  <div>{MenuBar}</div>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </container>
    </nav>
  )
}
