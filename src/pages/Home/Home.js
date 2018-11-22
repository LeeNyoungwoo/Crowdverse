import React, { Component } from "react";
import './Home.css'
import header from './header.jpg';
import korea from './Korea.png';
import us from './US.png';
import china from './China.png';

const eventName = [
  {
    category: "Politics",
    title1: "‘Era of no war’ is coming",
    title2: "Brexit negotiations"
  },
  {
    category: "Social",
    title1: "Refugee crisis",
    title2: "Me Too movement",
  },
  {
    category: "Culture",
    title1: "BTS became the first K-pop group to deliver a speech in UN",
    title2: "Breaking News",
  }
]

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { numTotal: 32, numSourceKorea: 19, numSourceUS: 8, numSourceChina: 5};
    // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  render() {
    return (
      <div>
        <div class="homeupperBox">
          <div class="homeupperTextBox">
            <div class="homeupperBoxTitle">Welcome to CrowdVerse</div>
            <div class='homeupperBoxContent'>We aim to fill the information gap</div>
            <div class='homeupperBoxContent'>between each person who has different cultural background</div>
          </div>
          <div class="homeupperImageBox">
            <img src={header} class="homeupperImage" alt="Header"/>
          </div>
        </div>
        <div class="homeboxText">
            <div class='homeboxTextStyle'>We have</div>
          <div class='homeboxNumStyle'>{this.state.numTotal}</div>
          <div class='homeboxTextStyle'>Sources in</div>
          <div class='homeboxNumStyle'>3</div>
          <div class='homeboxTextStyle'>different Perspectives. Enjoy!</div>
        </div>
        <div class="homenationalBox">
          <div class="homenationalFlagBox">
            <div class="homenationalFlagImg">
              <img src={korea} class="homeFlagImg" alt="Korea"/>
            </div>
            <div class="homenationalFlagText1">Korea</div>
            <div class="homenationalFlagText2">{this.state.numSourceKorea}</div>
            <div class="homenationalFlagText3">sources</div>
          </div>
          <div class="homenationalFlagBox">
            <div class="homenationalFlagImg">
              <img src={us} class="homeFlagImg" alt="US"/>
            </div>
            <div class="homenationalFlagText1">U.S</div>
            <div class="homenationalFlagText2">{this.state.numSourceUS}</div>
            <div class="homenationalFlagText3">sources</div>
          </div>        
          <div class="homenationalFlagBox">
            <div class="homenationalFlagImg">
              <img src={china} class="homeFlagImg" alt="China"/>
            </div>
            <div class="homenationalFlagText1">China</div>
            <div class="homenationalFlagText2">{this.state.numSourceChina}</div>
            <div class="homenationalFlagText3">sources</div>
          </div>
        </div>
        <div class="homehrBox">
          <hr class="homehrStyle" />
        </div>
        <div class="homeboxText">
          <div class='homeboxTextStyle'>We have</div>
          <div class='homeboxNumStyle'>8</div>
          <div class='homeboxTextStyle'>Events in</div>
          <div class='homeboxNumStyle'>3</div>
          <div class='homeboxTextStyle'>Categories. You can dive in!</div>
        </div>
        <div class="homeeventBox">
          {eventName.map((data) => (
            <div class="homeeventRight homeeventCategoryBox">
              <div class="homeeventCategoryText1">{data.category}</div>
              <div class="homeeventCategoryText2">{data.title1}</div>
              <div class="homeeventCategoryText2">{data.title2}</div>
            </div>
          ))}  
        </div>
      </div>
    );
  }
}

export default Home;
