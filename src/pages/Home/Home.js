import React from "react";
import './Home/style.css'

const exampleEventList = [
  {
    numSourceKorea: 19,
    numSourceKorea : 8,
    numSourceKorea: 5
  },
  {},
]

const Home = ({ match }) => {
  return (
    <div>
      <h2>Home</h2>
      <div class="upperBox">
          <div class="upperBoxTitle">Welcome to CrowdVerse</div>
          <div class='upperBoxContent'>We aim to fill the information gap</div>
          <div class='upperBoxContent'>between each person who has different cultural background</div>
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
          <div class="nationalFlagImg"></div>
          <div class="nationalFlagText1">Korea</div>
          <div class="nationalFlagText2">19</div>
          <div class="nationalFlagText3">sources</div>
        </div>
        <div class="nationalFlagBox">
          <div class="nationalFlagImg"></div>
          <div class="nationalFlagText1">U.S</div>
          <div class="nationalFlagText2">8</div>
          <div class="nationalFlagText3">sources</div>
        </div>        
        <div class="nationalFlagBox">
          <div class="nationalFlagImg"></div>
          <div class="nationalFlagText1">China</div>
          <div class="nationalFlagText2">5</div>
          <div class="nationalFlagText3">sources</div>
        </div>
      </div>
      <div class="boxText">
      <hr class="hrStyle" />
        <div class='boxTextStyle'>We have</div>
        <div class='boxNumStyle'>8</div>
        <div class='boxTextStyle'>Events in</div>
        <div class='boxNumStyle'>3</div>
        <div class='boxTextStyle'>Categories. You can dive in!</div>
      </div>
      <div class="eventBox">
        <div class="eventRight eventCategoryBox">
          <div class="eventCategoryText1">Politics</div>
          <div class="eventCategoryText2">Peace treaty will be signed</div>
          <div class="eventCategoryText2">Tax Increases</div>
          <div class="eventCategoryText2">Vote Rate</div>
        </div>   
        <div class="eventCategoryBox">
          <div class="eventCategoryText1">Social</div>
          <div class="eventCategoryText2">#Me Too Movement</div>
          <div class="eventCategoryText2">Trait of Democracy</div>
        </div>   
        <div class="eventLeft eventCategoryBox">
          <div class="eventCategoryText1">Technology</div>
          <div class="eventCategoryText2">Artificial Intelligence</div>
          <div class="eventCategoryText2">Breaking News</div>
          <div class="eventCategoryText2">Algorithm of Google</div>
        </div>   
      </div>
    </div>
  );
};

export default Home;
