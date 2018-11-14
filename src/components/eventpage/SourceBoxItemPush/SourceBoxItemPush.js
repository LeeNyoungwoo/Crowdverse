import React, { Component } from "react";
import classNames from "classnames";
import "./SourceBoxItemPush.scss";

class SourceBoxItemPush extends Component {
  state = {
    isHovered: false
  };

  sampleAlert = message => {
    alert(`Hello! I am an alert box!!\nmessage: ${message}`);
  };

  render() {
    const { currentTab } = this.props;
    return (
      <div
        className={classNames("source_box_item_push_container")}
        onClick={() => this.sampleAlert(currentTab)}
        onMouseEnter={() => this.setState({ isHovered: true })}
        onMouseLeave={() => this.setState({ isHovered: false })}
      >
        <div className="desc_box">
          {!this.state.isHovered ? (
            <span className="plus">+</span>
          ) : (
            <span className="tooltip">
              If you have a source to upload, please click this button!
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default SourceBoxItemPush;
