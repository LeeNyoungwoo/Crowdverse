import React, { Component } from "react";
import "./Home.css";
import header from "./header.jpg";
import korea from "./Korea.png";
import us from "./US.png";
import china from "./China.png";
import { NavLink, Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { Header } from "pages/index.async.js";

const eventName = [
  {
    category: "Politics",
    title1: "‘Era of no war’ is coming",
    title2: "Brexit negotiations"
  },
  {
    category: "Social",
    title1: "Refugee crisis",
    title2: "Me Too movement"
  },
  {
    category: "Culture",
    title1: "BTS deliver a speech in UN",
    title2: "The British Museum’s ‘Looting’ Problem"
  }
];

@inject("userinfo")
@observer
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numTotal: 32,
      numSourceKorea: 19,
      numSourceUS: 8,
      numSourceChina: 5
    };
    // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  changeToThisUser = (userinfo, userName) => {
    userinfo.updateUserId(userName);
    this.setState({ currentUser: userName });
    this.forceUpdate();
  };

  render() {
    const { userinfo } = this.props;
    const userSelection = (
      <div className="select_user">
        <span>
          <strong>Select User</strong>
        </span>
        <div
          className="user_name"
          onClick={() => this.changeToThisUser(userinfo, "Keon")}
        >
          <span>Keon</span>
        </div>
        <div
          className="user_name"
          onClick={() => this.changeToThisUser(userinfo, "Nyoungwoo")}
        >
          <span>Nyoungwoo</span>
        </div>
        <div
          className="user_name"
          onClick={() => this.changeToThisUser(userinfo, "Yoonseo")}
        >
          <span>Yoonseo</span>
        </div>
        <div
          className="user_name"
          onClick={() => this.changeToThisUser(userinfo, "Evey")}
        >
          <span>Evey</span>
        </div>
      </div>
    );
    return (
      <div>
        <Header userID={this.state.currentUser} />
        {userSelection}
        <div className="homeupperBox">
          <div className="homeupperTextBox">
            <div className="homeupperBoxTitle">Welcome to CrowdVerse</div>
            <div className="homeupperBoxContent">
              We aim to fill the information gap
            </div>
            <div className="homeupperBoxContent">
              between each person who has different cultural background
            </div>
          </div>
          <div className="homeupperImageBox">
            <img src={header} className="homeupperImage" alt="Header" />
          </div>
        </div>
        <div className="homeboxText">
          <div className="homeboxTextStyle">We have</div>
          <div className="homeboxNumStyle">{this.state.numTotal}</div>
          <div className="homeboxTextStyle">Sources in</div>
          <div className="homeboxNumStyle">3</div>
          <div className="homeboxTextStyle">different Perspectives. Enjoy!</div>
        </div>
        <div className="homenationalBox">
          <div className="homenationalFlagBox">
            <div className="homenationalFlagImg">
              <img src={korea} className="homeFlagImg" alt="Korea" />
            </div>
            <div className="homenationalFlagText1">Korea</div>
            <div className="homenationalFlagText2">
              {this.state.numSourceKorea}
            </div>
            <div className="homenationalFlagText3">sources</div>
          </div>
          <div className="homenationalFlagBox">
            <div className="homenationalFlagImg">
              <img src={us} className="homeFlagImg" alt="US" />
            </div>
            <div className="homenationalFlagText1">U.S</div>
            <div className="homenationalFlagText2">
              {this.state.numSourceUS}
            </div>
            <div className="homenationalFlagText3">sources</div>
          </div>
          <div className="homenationalFlagBox">
            <div className="homenationalFlagImg">
              <img src={china} className="homeFlagImg" alt="China" />
            </div>
            <div className="homenationalFlagText1">China</div>
            <div className="homenationalFlagText2">
              {this.state.numSourceChina}
            </div>
            <div className="homenationalFlagText3">sources</div>
          </div>
        </div>
        <div className="homehrBox">
          <hr className="homehrStyle" />
        </div>
        <div className="homeboxText">
          <div className="homeboxTextStyle">We have</div>
          <div className="homeboxNumStyle">8</div>
          <div className="homeboxTextStyle">Events in</div>
          <div className="homeboxNumStyle">3</div>
          <div className="homeboxTextStyle">Categories. You can dive in!</div>
        </div>
        <div className="homeeventBox">
          {eventName.map((data, index) => (
            <Link key={index} to={`/perspective/${data.category}`}>
              <div className="homeeventRight homeeventCategoryBox">
                <div className="homeeventCategoryText1">{data.category}</div>
                <div className="homeeventCategoryText2">{data.title1}</div>
                <div className="homeeventCategoryText2">{data.title2}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
