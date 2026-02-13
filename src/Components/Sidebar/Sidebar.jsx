import React from "react";
import "./Sidebar.css";
import home from "../../assets/assets/home.png";
import game_icon from "../../assets/assets/game_icon.png";
import automobiles from "../../assets/assets/automobiles.png";
import entertainment from "../../assets/assets/entertainment.png";
import sports from "../../assets/assets/sports.png";
import music from "../../assets/assets/music.png";
import blogs from "../../assets/assets/blogs.png";
import tech from "../../assets/assets/tech.png";
import news from "../../assets/assets/news.png";
import jack from "../../assets/assets/jack.png";
import simon from "../../assets/assets/simon.png";
import tom from "../../assets/assets/tom.png";
import megan from "../../assets/assets/megan.png";
import cameron from "../../assets/assets/cameron.png";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sortcut-links">
        <div className="side-link">
          <img src={home} alt="" />
          <p>Home</p>
        </div>
        <div className="side-link">
          <img src={game_icon} alt="" />
          <p>Gaming</p>
        </div>
        <div className="side-link">
          <img src={automobiles} alt="" />
          <p>Automobiles</p>
        </div>
        <div className="side-link">
          <img src={sports} alt="" />
          <p>Sports</p>
        </div>
        <div className="side-link">
          <img src={entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <div className="side-link">
          <img src={tech} alt="" />
          <p>Tecnology</p>
        </div>
        <div className="side-link">
          <img src={music} alt="" />
          <p>Music</p>
        </div>
        <div className="side-link">
          <img src={blogs} alt="" />
          <p>Blog</p>
        </div>
        <div className="side-link">
          <img src={news} alt="" />
          <p>News</p>
        </div>
        <hr />
        <div className="subscribed-list">
          <h3>Subscribed Channels</h3>
          <div className="side-link">
            <img src={jack} alt="" />
            <p>PewDiePie</p>
          </div>

          <div className="side-link">
            <img src={simon} alt="" />
            <p>Mr-Beast</p>
          </div>

          <div className="side-link">
            <img src={tom} alt="" />
            <p>justin Biebar</p>
          </div>

          <div className="side-link">
            <img src={megan} alt="" />
            <p>5-Minute Craft</p>
          </div>

          <div className="side-link">
            <img src={cameron} alt="" />
            <p>Nas Daily</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
