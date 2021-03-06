import React, { useState } from 'react'
import SaylessLogo from '../../../assets/icons/sayless-logo.png'
import SaylessLogo2 from '../../../assets/icons/sl-studio-image.png'

import Twitter from '../../../assets/icons/twitter.svg'
import Instagram from '../../../assets/icons/instagram.svg'
import Pinterest from '../../../assets/icons/pinterest.svg'
import { Link } from 'gatsby'
import './footer.css'


export default () => {
    return (
        <div className="footer-container">
            <div className="footer-wrapper">
                <div className="footer-logo-wrapper">
                    <img className="footer-logo" src={SaylessLogo2} />
                </div>
                <div className="footer-navigation">
                    <div><a href={`/work`}>Works</a></div>
                    <div><a href={`/inspiration`}>Inspo</a></div>
                    <div><a href={`/contact`}>Contact</a></div>
                </div>
                <div className="footer-social-links">
                    <a href="http://www.instagram.com/saylessstudio">
                        <img className="footer-symbol instagram" src={Instagram} />
                    </a>
                    <a href="http://www.twitter.com/sayless_studio">
                        <img className="footer-symbol twitter" src={Twitter} />
                    </a>
                    <a href="https://www.pinterest.com/randib111/">
                        <img className="footer-symbol pinterest" src={Pinterest} />
                    </a>

                </div>
            </div>
        </div>
    )
}