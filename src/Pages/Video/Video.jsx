import React from 'react'
import './Video.css'
import Playvideo from '../../Components/Playvideo/Playvideo'
import Recommented from '../../Components/recommented/Recommented'

function Video() {
  return (
    <div>
      <div className="play-container">
        
          
      <Playvideo></Playvideo>
      <Recommented></Recommented>

      </div>

    </div>
  )
}

export default Video