import React from 'react'
import './fourth.css'
import { feature1, feature2, feature3 } from '../../container/freedom/import';
import Freedom from '../../container/freedom/Freedom';

const Fourth = () => {
  return (
    <div className='fourth-container'>
        <h1 className='fourth-headling'>Quisque egestas diam in arcu quis euismod — scelerisque purus semper eget duis at risus viverra.</h1>
        <div className='forth-section'>
             <Freedom imgUrl={feature1} heading="Front End Developer" freePara="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
             <Freedom imgUrl={feature2} heading="Back End Developer" freePara="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
             <Freedom imgUrl={feature3} heading="Full Stack Developer" freePara="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        </div>
    </div>
  )
}

export default Fourth