import React from "react";
import "./Playvideo.css";
import like from "../../assets/assets/like.png";
import dislike from "../../assets/assets/dislike.png";
import share from "../../assets/assets/share.png";
import save from "../../assets/assets/save.png";
import jack from "../../assets/assets/jack.png";
import user_profile from "../../assets/assets/user_profile.jpg";

const Playvideo = ({ videoId }) => {
  return (
    <div className="playvideo">
      <iframe
  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
  frameBorder="0"
  allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  title="YouTube video player"
></iframe>


      <h3>Best youtube channel to learn coding</h3>

      <div className="play-video-info">
        <p>1525 Views • 2 days ago</p>

        <div>
          <span>
            <img src={like} alt="" /> 125
          </span>
          <span>
            <img src={dislike} alt="" /> 2
          </span>
          <span>
            <img src={share} alt="" /> Share
          </span>
          <span>
            <img src={save} alt="" /> Save
          </span>
        </div>
      </div>

      <hr />

      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>Greatbro</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>

      <div className="vid-description">
        <p>Channel that makes learning easy</p>
        <p>Subscribe Karan-Stack for more web development tutorials.</p>
      </div>

      <hr />

      <h4>130 Comments</h4>

      <div className="comment">
        <img src={user_profile} alt="" />
        <div>
          <h3>
            Jack Nicholson <span>1 day ago</span>
          </h3>
          <p>
            A global computer network providing a variety of information.
          </p>
          <div className="comment-action">
            <img src={like} alt="" />
            <span>244</span>
            <img src={dislike} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playvideo;

