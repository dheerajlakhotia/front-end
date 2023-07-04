import React, { useState } from 'react'
import "./Topics.css"
import {photo2, topic1,topic2,topic3,topic5,topic6,topic7} from "../../assets"

const Topics = () => {

const [currentImage , setCurrentImage] = useState(topic2)


  return (
    <section id="topics" className="black">
       <div className="wrapper">
        <h2>What will you learn?</h2>
        <div className="content-container">
          <ul className='topic-list'>
            <li onMouseEnter={()=>setCurrentImage (topic2)}>What are frequencies?</li>
            <li onMouseEnter={()=>setCurrentImage (topic3)}>Using DAW</li>
            <li onMouseEnter={()=>setCurrentImage (topic6)}>Vocals Processing</li>
            <li onMouseEnter={()=>setCurrentImage (topic5)}>Mixing</li>
            <li onMouseEnter={()=>setCurrentImage (topic7)}>Mixing Console</li>
            <li onMouseEnter={()=>setCurrentImage (topic1)}>Mastering</li>
          </ul>
          <div className="topic-image">
            <img src={currentImage} alt="topic-image" />
          </div>
        </div>
            <img src={photo2} className='bg-element-1'/>
       </div>

    </section>
  )
}

export default Topics
