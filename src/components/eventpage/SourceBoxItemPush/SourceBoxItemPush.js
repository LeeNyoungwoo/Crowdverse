import React, { Component } from "react";
import classNames from "classnames";
import "./SourceBoxItemPush.css";

class SourceBoxItemPush extends Component {
  state = {
    isHovered: false
  };

  sampleAlert = message => {
    alert(`Hello! I am an alert box!!\nmessage: ${message}`);
  };

  render() {
    const { currentTab,  eventName, forceUpdate } = this.props;
    return (
      <div
        className={classNames("source_box_item_push_container")}
        onClick={() => this.sampleAlert(currentTab)} //여기서 모달로 currentTab,  eventName, forceUpdate 전부 전달해줘야함!
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
      >
        <div className="desc_box">
          {!this.state.isHovered ? (
            <span className="plus">+</span>
          ) : (
            <span className="tooltiptext">
              If you have a source to upload, please click this button!
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default SourceBoxItemPush;
