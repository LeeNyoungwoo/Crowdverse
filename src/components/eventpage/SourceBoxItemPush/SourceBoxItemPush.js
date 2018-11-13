import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./SourceBoxItemPush.scss";

class SourceBoxItemPush extends Component {
  render() {
    const { currentTab } = this.props;
    return (
      <Link to={`/event/${currentTab}`}>
        <div className={classNames("source_box_item_push_container")}>
          <div className="plus">
            <span>+</span>
          </div>
        </div>
      </Link>
    );
  }
}

export default SourceBoxItemPush;
