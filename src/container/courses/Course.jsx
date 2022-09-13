import React from 'react'
import './course.css'

const Course = ({imgUrl, heading, para}) => {
  return (
    <div className='course-container'>
         <div className='course-img-box'>
            <img src={imgUrl} />
         </div>
         <h2>{heading}</h2>
         <p>{para}</p>
    </div>
  )
}

export default Course