import React from 'react'
import './header.css'
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header-section'>
             <nav className='navbar'>
                  <a href=''><img src={logo} alt="Logo" className='logo'/></a>
                  <div className='header-clicks'>
                     <a href=''>SECONDARY PAGE</a>
                     <button>SING UP</button>
                  </div>
             </nav>
        </div>
        <div className='hero-section'>
                 <h1>Landing template for startups</h1>
                 <h3>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</h3>
                 <button>PRICING AND PLANS</button>
        </div>
    </div>
  )
}

export default Header