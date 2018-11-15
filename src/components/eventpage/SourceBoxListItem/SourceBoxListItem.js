import React, { Component } from "react";
import classNames from "classnames";
import "./SourceBoxListItem.scss";

// event: "event1",
// sourceTab: "official",
// imageSrc: "scr",
// title: "official_title_1",
// content: "content",
// poster: "poster",
// date: "date"

class SourceBoxListItem extends Component {
  sampleAlert = message => {
    alert(`Hello! I am an alert box!!\nmessage: ${message}`);
  };

  render() {
    const { data } = this.props;
    return (
      <div className={classNames("source_box_list_item_conta")}>
        <div
          className={classNames("item_wrapper")}
          onClick={() =>
            this.sampleAlert(`${data.title} / ${data.poster} / ${data.date}`)
          }
        >
          <div className={classNames("image_box")}>{data.imageSrc}</div>
          <div className={classNames("text_box")}>
            <div className={classNames("content_box")}>
              <div className={classNames("title")}>{data.title}</div>
              <div className={classNames("content")}>{data.content}</div>
            </div>
            <div className={classNames("info_box")}>
              <div className={classNames("info_box_poster")}>{data.poster}</div>
              <div className={classNames("info_box_date")}>{data.date}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SourceBoxListItem;
