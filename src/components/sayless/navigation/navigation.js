import React, { useState } from 'react'
import { Link } from 'gatsby'
import './navigation.css'
import SaylessSymbol from '../../../assets/icons/sayless-symbol.png'
import Menu from './menu'
import { Transition } from "react-spring/renderprops-universal";

export default () => {
  const [menuToggle, setMenuToggle] = useState(true);


  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  }

  return (
    <nav className="navigation">
      {
        <Transition
          items={menuToggle}
          from={{ position: 'absolute', opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}>
          {menuToggle =>
            menuToggle
              ? props => <div style={props}></div>
              : props => <Menu style={props} toggleMenu={toggleMenu} />
          }
        </Transition>
      }
      <container className="nav-container">
        <div className="navigationWrapper">
        <div className="navigationList">
            <Link style={{ zIndex: 1000 }} to="/"><img className="sayless-symbol" src={SaylessSymbol} /></Link>
          <div className="navigationItem" onClick={toggleMenu}>
            <div>
              <div className="menu-bar"></div>
              <div className="menu-bar"></div>
              <div className="menu-bar"></div>
            </div>
          </div>
        </div>
    </div>
    </container>
  </nav >
)
}
