import React, { Component } from "react";
import './Home.scss'
import header from './header.jpg';
import korea from './Korea.png';
import us from './US.png';
import china from './China.png';

const numSource = [
  {
    numSourceKorea: 19,
    numSourceUS : 8,
    numSourceChina: 5
  }
]

const eventName = [
  {
    category: "Politics",
    title1: "Peace treaty will be signed",
    title2: "Tax Increases",
    title3: "Vote Rate"
  },
  {
    category: "Social",
    title1: "#Me Too Movement",
    title2: "Trait of Democracy",
    title3: "Random Event"
  },
  {
    category: "Technology",
    title1: "Artificial Intelligence",
    title2: "Breaking News",
    title3: "Algorithm of Google"
  }
]
class Home extends Component {
  render() {
    return (
      <div>
        <div class="upperBox">
          <div class="upperTextBox">
            <div class="upperBoxTitle">Welcome to CrowdVerse</div>
            <div class='upperBoxContent'>We aim to fill the information gap</div>
            <div class='upperBoxContent'>between each person who has different cultural background</div>
          </div>
          <div class="upperImageBox">
            <img src={header} class="upperImage" alt="Header"/>
          </div>
        </div>
        <div class="boxText">
            <div class='boxTextStyle'>We have</div>
          <div class='boxNumStyle'>32</div>
          <div class='boxTextStyle'>Sources in</div>
          <div class='boxNumStyle'>3</div>
          <div class='boxTextStyle'>different Perspectives. Enjoy!</div>
        </div>
        <div class="nationalBox">
          <div class="nationalFlagBox">
            <div class="nationalFlagImg">
              <img src={korea} class="FlagImg" alt="Korea"/>
            </div>
            <div class="nationalFlagText1">Korea</div>
            <div class="nationalFlagText2">{numSource.numSourceKorea}</div>
            <div class="nationalFlagText3">sources</div>
          </div>
          <div class="nationalFlagBox">
            <div class="nationalFlagImg">
              <img src={us} class="FlagImg" alt="US"/>
            </div>
            <div class="nationalFlagText1">U.S</div>
            <div class="nationalFlagText2">{numSource.numSourceUS}</div>
            <div class="nationalFlagText3">sources</div>
          </div>        
          <div class="nationalFlagBox">
            <div class="nationalFlagImg">
              <img src={china} class="FlagImg" alt="China"/>
            </div>
            <div class="nationalFlagText1">China</div>
            <div class="nationalFlagText2">{numSource.numSourceChina}</div>
            <div class="nationalFlagText3">sources</div>
          </div>
        </div>
        <div class="hrBox">
          <hr class="hrStyle" />
        </div>
        <div class="boxText">
          <div class='boxTextStyle'>We have</div>
          <div class='boxNumStyle'>8</div>
          <div class='boxTextStyle'>Events in</div>
          <div class='boxNumStyle'>3</div>
          <div class='boxTextStyle'>Categories. You can dive in!</div>
        </div>
        <div class="eventBox">
          {eventName.map((data) => (
            <div class="eventRight eventCategoryBox">
              <div class="eventCategoryText1">{data.category}</div>
              <div class="eventCategoryText2">{data.title1}</div>
              <div class="eventCategoryText2">{data.title2}</div>
              <div class="eventCategoryText2">{data.title3}</div>
            </div>
          ))}  
        </div>
      </div>
    );
  }
}

export default Home;
