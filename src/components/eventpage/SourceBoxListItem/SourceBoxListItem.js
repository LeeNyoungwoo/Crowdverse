import React, { Component } from "react";
import "./SourceBoxListItem.scss";

// event: "event1",
// sourceTab: "official",
// imageSrc: "scr",
// title: "official_title_1",
// content: "content",
// poster: "poster",
// date: "date"
class SourceBoxListItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <div>
          <div>{data.imageSrc}</div>
          <div>{data.title}</div>
          <div>{data.content}</div>
        </div>
      </div>
    );
  }
}

export default SourceBoxListItem;
