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
                    <div><Link to={`/works`}>Works</Link></div>
                    <div><Link to={`/inspo`}>Inspo</Link></div>
                    <div><Link to={`/contact`}>Contact</Link></div>
                </div>
                <div className="footer-social-links">
                    <Link to="http://instagram.com/saylessstudio">
                        <img className="footer-symbol instagram" src={Instagram} />
                    </Link>
                    <Link to="http://instagram.com/saylessstudio">
                        <img className="footer-symbol twitter" src={Twitter} />
                    </Link>
                    <Link to="http://instagram.com/saylessstudio">
                        <img className="footer-symbol pinterest" src={Pinterest} />
                    </Link>

                </div>
            </div>
        </div>
    )
}