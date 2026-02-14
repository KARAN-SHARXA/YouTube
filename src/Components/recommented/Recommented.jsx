import React from 'react'
import './Recommended.css'

import thumbnail1 from "../../assets/assets/thumbnail1.png";
import thumbnail2 from "../../assets/assets/thumbnail2.png";
import thumbnail3 from "../../assets/assets/thumbnail3.png";
import thumbnail4 from "../../assets/assets/thumbnail4.png";
import thumbnail5 from "../../assets/assets/thumbnail5.png";
import thumbnail6 from "../../assets/assets/thumbnail6.png";
import thumbnail7 from "../../assets/assets/thumbnail7.png";
import thumbnail8 from "../../assets/assets/thumbnail8.png";

const Recommended = () => {

  const videos = [
    thumbnail1, thumbnail2, thumbnail3, thumbnail4,
    thumbnail5, thumbnail6, thumbnail7, thumbnail8
  ];

  return (
    <div className="recommended">
      {videos.map((thumb, index) => (
        <div className="side-video-list" key={index}>
          <img src={thumb} alt="" />
          <div className="vid-info">
            <h4>How to build a YouTube Clone with React</h4>
            <p>Karan Stack</p>
            <p>1.2M Views</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Recommended
