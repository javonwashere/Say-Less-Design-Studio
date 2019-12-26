import React, { useState } from 'react'
import SaylessLogo from '../../../assets/icons/sayless-logo.png'
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
                    <img className="footer-logo" src={SaylessLogo} />
                </div>
                <div className="footer-navigation">
                    <div><Link to={`/work`}>Works</Link></div>
                    <div><Link to={`/inspiration`}>Inspo</Link></div>
                    <div><Link to={`/contact`}>Contact</Link></div>
                </div>
                <div className="footer-social-links">
                    <a href="http://www.instagram.com/saylessstudio">
                        <img className="footer-symbol instagram" src={Instagram} />
                    </a>
                    <a href="http://www.instagram.com/saylessstudio">
                        <img className="footer-symbol twitter" src={Twitter} />
                    </a>
                    <a href="http://www.instagram.com/saylessstudio">
                        <img className="footer-symbol pinterest" src={Pinterest} />
                    </a>

                </div>
            </div>
        </div>
    )
}