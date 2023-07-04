import React from 'react'
import "./Info.css"
import { photo1,photo4,photo3} from '../../assets'

const Info = () => {
  return (
<section id='info' className='dark-gray'>
<div className="wrapper">
  <div className="content-container">
    <div className="info-content">
      <img src={photo4} alt="student-icon"/>
      <div className="amount">23,000+</div>
      <div className="type">Student</div>
    </div>
    <div className="info-content">
      <img src={photo1} alt="student-icon"/>
      <div className="amount">26 Hrs</div>
      <div className="type">Video Content</div>
    </div>
  </div>
  <img className='bg-element-2' src={photo3} />
</div>
</section>
  )
}

export default Info
