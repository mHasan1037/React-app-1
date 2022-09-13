import React from 'react'
import './freedom.css'

const Freedom = ({ imgUrl, heading, freePara }) => {
  return (
    <div className='freedom-container'>
        <div className='freedom-text'>
            <h1>{heading}</h1>
            <p>{freePara}</p>
        </div>
        <div className='freedom-img'>
            <img src={imgUrl} alt="Freedom Image" />
        </div>
    </div>
  )
}

export default Freedom