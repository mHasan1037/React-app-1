import React from 'react'
import './user.css'
import Users from '../../container/usrs/users'
import testi1 from '../../assets/testimonial-image-01.jpg'
import testi2 from '../../assets/testimonial-image-02.jpg'
import testi3 from '../../assets/testimonial-image-03.jpg'

const User = () => {
  return (
    <div className='user-container'>
        <h1>Loved by users worldwide</h1>
        <div className='user-holder'>
            <Users img={testi1} para="Kendra Kinson" />
            <Users img={testi2} para="Jeffrey Harris"/>
            <Users img={testi3} para="Emilia Jovic"/>
        </div>
    </div>
  )
}

export default User