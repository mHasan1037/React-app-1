import React from 'react'
import afterBg from '../../assets/image-placeholder.png'
import './afterheader.css'

const AfterHeader = () => {
  return (
    <div className='afterHeader-container'>
        <div className='afterHeader-section'>
            <div className='afterHeader-text'>
                <h1>Duis aute irure dolor in velit esse-reprehenderit cillum dolore.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.</p>
            </div>
            <div className='img-box'>
                <img src={afterBg} alt="Background" />
            </div>
        </div>
    </div>
  )
}

export default AfterHeader