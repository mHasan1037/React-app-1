import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons"
import './user.css'



const users = ({img, para, intro}) => {
  return (
    <div className='users-holder'>
        <div className='stars'>
            <FontAwesomeIcon  icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon  icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon  icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon  icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon  icon={faStar}></FontAwesomeIcon>
        </div>
        <div className='user-thoght'>
           <p>— Duis aute irure dolor in repre</p>
           <p>
           voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Vitae aliquet nec ullamcorper in Excepteur sint occaecat.
           </p>
        </div>
        <div className='img-sec'>
           <img src={img} />
           <p>{para}</p>
        </div>
    </div>
  )
}

export default users