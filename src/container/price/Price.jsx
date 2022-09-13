import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import './price.css'




const price = ({price}) => {
  return (
    <div className='price-container'>
        <div className='price-head'>
            <h1>{price} <span>/m</span></h1>
            <p>per month, billed annually</p>
        </div>
        <h4 style={{margin: "20px 0", color: '#E1E6EB'}}>What's included</h4>
        <div className='price-box'>
            <div className='price-inner'>
               <FontAwesomeIcon className='green-icon' icon={faCheck}></FontAwesomeIcon>
               <p>Excepteur sint occaecat velit</p>
            </div>
            <div className='price-inner'>
               <FontAwesomeIcon className='green-icon' icon={faCheck}></FontAwesomeIcon>
               <p>Excepteur sint occaecat velit</p>
            </div>
            <div className='price-inner'>
               <FontAwesomeIcon className='green-icon' icon={faCheck}></FontAwesomeIcon>
               <p>Excepteur sint occaecat velit</p>
            </div>
            <div className='price-inner'>
               <FontAwesomeIcon className='gray-icon' icon={faCheck}></FontAwesomeIcon>
               <p>Excepteur sint occaecat velit</p>
            </div>
            <div className='price-inner'>
               <FontAwesomeIcon className='gray-icon' icon={faCheck}></FontAwesomeIcon>
               <p>Excepteur sint occaecat velit</p>
            </div>
        </div>
        <button className='trail'>START FREE TRIAL</button>
    </div>
  )
}

export default price