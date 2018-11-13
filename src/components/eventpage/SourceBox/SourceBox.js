import React, { Component } from "react";
import "./SourceBox.scss";
import { SourceBoxTab, SourceBoxItemPush, SourceBoxList } from "pages/index.async.js";
import { observer, inject } from "mobx-react";

//description for DB data
//each one of sampleListData is for each post
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
// you can check details by usage of sampleListData below.

const sampleListData = [
  {
    event: "event1",
    sourceTab: "official",
    imageSrc: "scr",
    title: "official_title_1",
    content: "content",
    poster: "poster",
    date: "date"
  },
  {
    event: "event1",
    sourceTab: "individual",
    imageSrc: "scr",
    title: "individual_title_1",
    content: "content",
    poster: "poster",
    date: "date"
  },
  {
    event: "event1",
    sourceTab: "official",
    imageSrc: "scr",
    title: "official_title_2",
    content: "content",
    poster: "poster",
    date: "date"
  },
  {
    event: "event1",
    sourceTab: "individual",
    imageSrc: "scr",
    title: "individual_title_2",
    content: "content",
    poster: "poster",
    date: "date"
  },
  {
    event: "event1",
    sourceTab: "official",
    imageSrc: "scr",
    title: "official_title_3",
    content: "content",
    poster: "poster",
    date: "date"
  },
  {
    event: "event1",
    sourceTab: "individual",
    imageSrc: "scr",
    title: "individual_title_3",
    content: "content",
    poster: "poster",
    date: "date"
  },
  {
    event: "event1",
    sourceTab: "official",
    imageSrc: "scr",
    title: "official_title_4",
    content: "content",
    poster: "poster",
    date: "date"
  },
  {
    event: "event1",
    sourceTab: "individual",
    imageSrc: "scr",
    title: "individual_title_4",
    content: "content",
    poster: "poster",
    date: "date"
  },
  {
    event: "event1",
    sourceTab: "official",
    imageSrc: "scr",
    title: "official_title_5",
    content: "content",
    poster: "poster",
    date: "date"
  },
  {
    event: "event1",
    sourceTab: "individual",
    imageSrc: "scr",
    title: "individual_title_5",
    content: "content",
    poster: "poster",
    date: "date"
  }
];

@inject("eventpage")
@observer
class SourceBox extends Component {
  state = {
    currentTab: "all"
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
    const individualDataList = originDataList.filter(
      data => data.sourceTab === "individual"
    );
    return individualDataList;
  };

  render() {
    const { width, height } = this.props;
    const { eventpage } = this.props;
    const currentTab = eventpage.currentTab;
    const originDataList = sampleListData;
    const individualDataList = this.getIndividualDataList(sampleListData);
    const officialDataList = this.getOfficialDataList(sampleListData);
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
        <SourceBoxItemPush currentTab={currentTab} />
        <SourceBoxList dataList={dataList} />
      </div>
    );
  }
}

export default SourceBox;
