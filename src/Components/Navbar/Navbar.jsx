import React from "react";
import "./Navbar.css";
import menu_icon from "../../assets/assets/menu.png";
import logo from "../../assets/assets/logo.png";
import search_icon from "../../assets/assets/search.png";
import upload_icon from "../../assets/assets/upload.png";
import more_icon from "../../assets/assets/more.png";
import notification_icon from "../../assets/assets/notification.png";
import profile_icon from "../../assets/assets/jack.png";
const Navbar = () => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img className="menu-icon" src={menu_icon} alt="Menu Icon" />
        <img className="logo" src={logo} alt="" />
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" name="" id="" placeholder="Seacrh" />
          <img src={search_icon} alt="" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className="user-icon" alt="" />
        
      </div>
    </nav>
  );
};

export default Navbar;
