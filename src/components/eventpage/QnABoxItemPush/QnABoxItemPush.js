import React, { Component } from "react";
import classNames from "classnames";
import "./QnABoxItemPush.scss";

class QnABoxItemPush extends Component {
  sampleAlert = message => {
    alert(`Hello! I am an alert box!!\nmessage: ${message}`);
  };

  render() {
    const { currentTab } = this.props;
    return (
      <div
        className={classNames("source_box_item_push_container")}
        onClick={() => this.sampleAlert(currentTab)}
      >
        <div className="plus">
          <span>+</span>
        </div>
      </div>
    );
  }
}

export default QnABoxItemPush;
