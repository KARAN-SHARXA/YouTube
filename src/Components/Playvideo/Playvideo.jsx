import React from "react";
import "./Playvideo.css";
import video1 from "../../assets/assets/video.mp4";
import like from "../../assets/assets/like.png";
import dislike from "../../assets/assets/dislike.png";
import share from "../../assets/assets/share.png";
import save from "../../assets/assets/save.png";
import jack from "../../assets/assets/jack.png";
import user_profile from "../../assets/assets/user_profile.jpg";

const Playvideo = () => {
  return (
    <div className="playvideo">
      <video src={video1} controls autoPlay muted></video>
      <h3>Best youtube channel to learn coding</h3>
      <div className="play-video-info">
        <p>1525 View &bull; 2days ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            125
          </span>
          <span>
            <img src={dislike} alt="" />
            2
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>Greatbro</p>
          <span>1M Subscrbers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning Easy</p>
        <p>Subscribe karan-Stack to watch More Tutorials on web development</p>
      </div>
      <hr />
      <h4>
        130 Comments
      </h4>
      <div className="comment">
        <img src={user_profile} alt="" />
        <div>
          <h3>Jack Nicholson  <span>1 day</span> </h3>
          <p>A global computer newtwork providing a variety of information and cc of interconnected newtowrks using standardized communicate</p>
          <div className="comment-action">
            <img src={like} alt="" />
            <span>244</span>
            <img src={dislike} alt="" />
          </div>
        </div>
      </div>
      <div className="comment">
        <img src={user_profile} alt="" />
        <div>
          <h3>Jack Nicholson  <span>1 day</span> </h3>
          <p>A global computer newtwork providing a variety of information and cc of interconnected newtowrks using standardized communicate</p>
          <div className="comment-action">
            <img src={like} alt="" />
            <span>244</span>
            <img src={dislike} alt="" />
          </div>
        </div>
      </div>
      <div className="comment">
        <img src={user_profile} alt="" />
        <div>
          <h3>Jack Nicholson  <span>1 day</span> </h3>
          <p>A global computer newtwork providing a variety of information and cc of interconnected newtowrks using standardized communicate</p>
          <div className="comment-action">
            <img src={like} alt="" />
            <span>244</span>
            <img src={dislike} alt="" />
          </div>
        </div>
      </div>
      <div className="comment">
        <img src={user_profile} alt="" />
        <div>
          <h3>Jack Nicholson  <span>1 day</span> </h3>
          <p>A global computer newtwork providing a variety of information and cc of interconnected newtowrks using standardized communicate</p>
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
