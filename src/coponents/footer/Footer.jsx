import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-top'>
            <h1>Nisi porta lorem mollis aliquam ut.</h1>
            <button>PRICING AND PLANS</button>
        </div>
        <div className='footer-main'>
            <div className='footer-logo'>
               <img src={logo} />
               <div className='social-links'>
                  <FontAwesomeIcon icon={faFacebookF} />
                  <FontAwesomeIcon icon={faTwitter} />
                  <FontAwesomeIcon icon={faInstagram} />
               </div>
            </div>
            <div className='footer-links'>
                <p>© 2020 Spike, all rights reserved</p>
                <nav>
                    <ul>
                        <li><a href=''>Contact</a></li>
                        <li><a href=''>About us</a></li>
                        <li><a href=''>FAQ's</a></li>
                        <li><a href=''>Support</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Footer