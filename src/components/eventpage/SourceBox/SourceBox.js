import React, { Component } from "react";
import "./SourceBox.scss";
import SourceBoxTab from "components/eventpage/SourceBoxTab";
import { observer, inject } from "mobx-react";

@inject("eventpage")
@observer
class SourceBox extends Component {
  state = {
    currentTab: "all"
  };

  handleTabClick = clickedTab => {
    this.setState({ currentTab: clickedTab });
  };

  render() {
    const { width, height } = this.props;
    const { eventpage } = this.props;
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
        <h2>현재 선택된 탭:{this.state.currentTab}</h2>
        <h2>스토어에 저장된 탭:{eventpage.currentTab}</h2>
      </div>
    );
  }
}

export default SourceBox;
