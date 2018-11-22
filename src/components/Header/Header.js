import React, { Component } from "react";
import "./Header.css";
import user from "./user.png";

class Header extends Component {
  render() {
    return (
      <div className="headermain_Box">
        <div className="headerlogoBox">
          <div className="headerlogoText">CrowdVerse</div>
        </div>
        <div className="headerotherBox">
          <div className="headerbuttonBox">
            <button className="headerbutton">Sign in</button>
          </div>
          <div className="headeruserBox">
            <div className="headeruserNameBox">
              <div className="headeruserNameText">Random_nickname</div>
            </div>
            <div className="headeruserImageBox">
              <img src={user} className="headeruserImage" alt="User" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
