import React from 'react'
import './Header.css'
import Navbar from "../Navbar/Navbar"

const Header = () => {
  return (
    <div>
      <header>
        <div className="wrapper">
          <Navbar/>
          <div className="cta">
              <p className="course-name">Sound Design MasterClass</p>
              <h1>Learn the Art of Sound Design</h1>
              <a className='demo-btn' href="#">Demo Lesson</a>
              </div>
        </div>


      </header>
      
    </div>
  )
}

export default Header
