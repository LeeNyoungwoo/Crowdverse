import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import user from "./user.png";
import { observer, inject } from "mobx-react";

@inject("userinfo")
@observer
class Header extends Component {
  state = {
    userID: this.props.userinfo.userID
  };

  // forceUpdateHeader = (userID) => {
  //   this.setState({userID:userID})
  //   // this.forceUpdate();
  // };

  // componentWillMount() {
  //   this.state.userID = this.props.userinfo.getUserId()
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   if (nextProps.userinfo.getUserId() !== this.state.userID) {
  //     this.setState({userID:nextProps.userinfo.getUserId()})
  //   }
  // }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   if (nextProps.userinfo.getUserId() !== this.props.userinfo.getUserId()) {
  //     true
  //   }
  //   else false
  // }

  render() {
    const { userinfo, userID } = this.props;

    return (
      <div className="headermain_Box">
        <Link to="/">
          <div className="headerlogoBox">
            <div className="headerlogoText">CrowdVerse</div>
          </div>
        </Link>
        <div className="headerotherBox">
          <div className="headerbuttonBox">
            <button className="headerbutton">Sign in</button>
          </div>
          <div className="headeruserBox">
            <div className="headeruserNameBox">
              <div className="headeruserNameText">
                {userID ? userID : this.state.userID}
              </div>
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
