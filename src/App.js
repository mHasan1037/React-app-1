import React from 'react'
import './app.css'

import Header from './coponents/header/Header'
import AfterHeader from './coponents/afterHeader/AfterHeader'
import OnlineCourse from './coponents/onlineCourses/OnlineCourse'
import Fourth from './coponents/fourth/Fourth'
import Pricing from './coponents/pricing/Pricing'
import User from './coponents/users/User'
import Footer from './coponents/footer/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <AfterHeader />
      <OnlineCourse />
      <hr style={{maxWidth: '900px', margin: '0 auto'}}></hr>
      <Fourth />
      <Pricing />
      <User />
      <Footer />

      {/*
      Website that I copied
      https://cruip.com/demos/spike/
      */}
    </div>
  )
}

export default App