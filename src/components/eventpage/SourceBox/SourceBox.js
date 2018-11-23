import React, { Component } from "react";
import "./SourceBox.css";
import {
  SourceBoxTab,
  SourceBoxItemPush,
  SourceBoxList,
  Loading
} from "pages/index.async.js";
import { observer, inject } from "mobx-react";
import fire from "../../../fire";
import { values } from "../../../../node_modules/mobx";

//description for DB data
//each one of originDataList is for each post
//it should have following 7 elements
//  ..., {
//    event: String (event name related to this post),
//    sourceTab: String (it MUST be either "official" or "individual"),
//    imageSrc: String (image url or scr),
//    title: String (post title which may from user input),
//    content: String (post content or summary which also may from user input),
//    poster: String (author of the post),
//    date: String or datetime (upload date)
//  }, ...
// you can check details by usage of originDataList below.

@inject("eventpage")
@observer
class SourceBox extends Component {
  state = {
    currentTab: "all",
    isLoaded: false
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // console.log("nextProps.eventpage.currentSourceDataList:",nextProps.eventpage.currentSourceDataList.length)
    // console.log("this.props.eventpage.currentSourceDataList:",this.props.eventpage.currentSourceDataList.length)
    if (
      nextProps.eventpage.currentSourceDataList.length !==
        this.props.eventpage.currentSourceDataList.length ||
      nextState.isLoaded != this.state.isLoaded
    ) {
      return true;
    }
    return false;
  }

  // componentWillUpdate( {
  //   this.getData()
  // })

  componentWillMount() {
    this.getData();
    //get datalist from db and add it to the eventpage.currentSourceDataList by using eventpage.updateCurrentSourceDataList function
    // eventpage.updateCurrentSourceDataList(datalist from db)
  }

  getData = async () => {
    fire
      .database()
      .ref("source")
      .on("value", snapshot => {
        console.log("snapshot.val()", snapshot.val());
        this.props.eventpage.updateCurrentSourceDataList(snapshot.val());
        this.setState({ isLoaded: true }, function() {
          // console.log("after getData this.state.isLoaded:", this.state.isLoaded)
        });
      });
  };

  componentDidUpdate() {
    //push store data to the db using eventpage.getCurrentSourceDataList()
    // pushToDB(targetDataList: eventpage.getCurrentSourceDataList())
    // console.log(this.props.eventpage.getCurrentSourceDataList())
    fire
      .database()
      .ref("source")
      .set(this.props.eventpage.getCurrentSourceDataList());
  }

  forceUpdateSourceBox = () => {
    this.forceUpdate();
  };

  //store있어서 딱히 필요하진 않음
  handleTabClick = clickedTab => {
    this.setState({ currentTab: clickedTab });
  };

  getOfficialDataList = originDataList => {
    const officialDataList = originDataList.filter(
      data => data.sourceTab === "official"
    );
    return officialDataList;
  };

  getIndividualDataList = originDataList => {
    //console.log(originDataList)
    const individualDataList = originDataList.filter(
      data => data.sourceTab === "individual"
    );
    return individualDataList;
  };

  filterByPerspective = (perspective) => {
    const filterdDataList = this.props.eventpage.currentSourceDataList.filter(
      data => data.perspective === perspective
    );
    return filterdDataList;
  }

  render() {
    const { eventName, width, height, nation } = this.props;
    const { eventpage } = this.props;
    const currentTab = eventpage.currentTab;
    const originDataList = this.filterByPerspective(nation);
    console.log("SourceBox originDataList: ", originDataList);
    const individualDataList = this.getIndividualDataList(originDataList);
    const officialDataList = this.getOfficialDataList(originDataList);
    const dataList =
      currentTab === "all"
        ? originDataList
        : currentTab === "official"
        ? officialDataList
        : individualDataList;

    return (
      <div style={{ width: width, height: height }}>
        <div className="header">
          <span className="header_title">Sources</span>
          <br />
          <span className="header_desc">Any source you want to share</span>
        </div>
        <SourceBoxTab
          onTabClick={this.handleTabClick}
          onClickToStore={eventpage.updateCurrentTab}
        />
        <div>
          <SourceBoxItemPush
            currentTab={currentTab}
            eventName={eventName}
            forceUpdate={this.forceUpdateSourceBox}
            isLoaded={this.state.isLoaded}
            nation={nation}
          />
          <SourceBoxList
            dataList={dataList}
            isLoaded={this.state.isLoaded}
            forceUpdate={this.forceUpdateSourceBox}
            Loading={<Loading width={width} height={height} />}
          />
        </div>
      </div>
    );
  }
}

export default SourceBox;
