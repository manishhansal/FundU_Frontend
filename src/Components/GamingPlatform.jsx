import React from 'react';
import './GamingPlatform.css';

const photo = ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg", "p5.jpg", "p6.jpg", "p7.jpg", "p8.jpg"]
const GamingPlatform = () => {
  
  return (
    <div id='gamingPlatform'>
      <h1>Gaming Platform</h1>
      <div className='gamingPlatform_main'>
        {photo.map((item) => {
          return (
            <div className='gamingPlatform_child'>
              <img src={item} alt="pic" />
              <button>Play Now</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GamingPlatform