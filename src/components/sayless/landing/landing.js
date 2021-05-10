import React from 'react'
import './landing.css'
import { Link } from 'gatsby'
import SaylessSymbol from '../../../assets/icons/sayless-symbol.png'
import SaylessSymbol2 from '../../../assets/icons/sl-icon.png'

export default function Landing(props) {
  console.log('LETS GO!', props.landing)

  const {
    contactLinkOne,
    contactLinkTwo,
    contactTitleOne,
    contactTitleTwo,
    headlineOne,
    headlineTwo,
    text,
  } = props.landing;
  return (
    <div className="landing-bg">
      <div className="landing-container">
        <div className="landing-wrapper">
          <div className="landing-header">
            <h1 style={{ color: 'white' }}>
              {headlineOne}
              <br /> {headlineTwo}
            </h1>
          </div>
          <div className="landing-par">
            <p>
              {text.text}{' '}
            </p>
          </div>
          <div className="landing-links">
            <div>
              <a href={contactLinkOne}>
                <h4>{contactTitleOne}</h4>
              </a>
            </div>
            <div>
              {' '}
              <a href={contactLinkTwo}>
                <h4>{contactTitleTwo}</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
