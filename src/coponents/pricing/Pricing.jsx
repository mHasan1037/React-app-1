import React from 'react'
import Switch from '../../container/switch/Switch'
import './pricing.css'
import Price from '../../container/price/Price'

const pricing = () => {
  return (
    <div className='pricing-container'>
          <div className='pricing-heading'>
              <h1>Simple, transparent pricing</h1>

              <div className='button-box'>
                 <p>Billed Monthly</p>
                 <div className='button-container'>
                     <Switch rounded={true} />
                 </div>
                 <p>Billed Annually</p>
              </div>
          </div>

          <div className='pricing-details'>
              <Price price='39'/>
              <Price price='59'/>
              <Price price='79' />
          </div>
    </div>
  )
}

export default pricing