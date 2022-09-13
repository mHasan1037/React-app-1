import React from 'react'
import Course from '../../container/courses/Course'
import { icon1, icon2, icon3, icon4, icon5, icon6 } from '../../container/courses/import'
import './onlineCourse.css'

const OnlineCourse = () => {
  return (
    <div className='online-container'>
        <Course imgUrl={icon1} heading="HTML Courses" para="Luctus accumsan tortor posuere ac — tempus iaculis urna id volutpat lacus laoreet non orci phasellus egestas tellus rutrum tellus eu ultrices vitae."/>
        <Course imgUrl={icon2} heading="CSS Courses" para="Luctus accumsan tortor posuere ac — tempus iaculis urna id volutpat lacus laoreet non orci phasellus egestas tellus rutrum tellus eu ultrices vitae."/>
        <Course imgUrl={icon3} heading="Bootstrap Courses" para="Luctus accumsan tortor posuere ac — tempus iaculis urna id volutpat lacus laoreet non orci phasellus egestas tellus rutrum tellus eu ultrices vitae."/>
        <Course imgUrl={icon4} heading="JavaScript Courses" para="Luctus accumsan tortor posuere ac — tempus iaculis urna id volutpat lacus laoreet non orci phasellus egestas tellus rutrum tellus eu ultrices vitae."/>
        <Course imgUrl={icon5} heading="React Courses" para="Luctus accumsan tortor posuere ac — tempus iaculis urna id volutpat lacus laoreet non orci phasellus egestas tellus rutrum tellus eu ultrices vitae."/>
        <Course imgUrl={icon6} heading="Node Courses" para="Luctus accumsan tortor posuere ac — tempus iaculis urna id volutpat lacus laoreet non orci phasellus egestas tellus rutrum tellus eu ultrices vitae."/>
    </div>
  )
}

export default OnlineCourse