import React, { Component } from "react";
import classNames from "classnames";
import { AddModal } from "pages/index.async.js";
import "./SourceBoxItemPush.css";

class SourceBoxItemPush extends Component {
  state = {
    isHovered: false
  };

  sampleAlert = message => {
    alert(`Hello! I am an alert box!!\nmessage: ${message}`);
  };

  render() {
    const { currentTab, eventName, forceUpdate, isLoaded } = this.props;
    const childComponent = (
      <div
        className={classNames("source_box_item_push_container")}
        // onClick={() => (isLoaded ? this.sampleAlert(currentTab) : null)} //여기서 모달로 currentTab,  eventName, forceUpdate 전부 전달해줘야함!
        onMouseEnter={() =>
          isLoaded ? this.setState({ isHovered: true }) : null
        }
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
    return (
      <div>
        <AddModal childComponent={childComponent} eventName={eventName}/>
      </div>
    );
  }
}

export default SourceBoxItemPush;
