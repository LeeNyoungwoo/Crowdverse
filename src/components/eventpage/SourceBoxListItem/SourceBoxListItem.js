import React, { Component } from "react";
import classNames from "classnames";
import { ContentModal } from "pages/index.async.js";
import "./SourceBoxListItem.css";
import { observer, inject } from "mobx-react";

import getImage from "utils";

@inject("eventpage")
@inject("userinfo")
@observer
class SourceBoxListItem extends Component {
  sampleAlert = message => {
    alert(`Hello! I am an alert box!!\nmessage: ${message}`);
  };

  handleRemove = (eventpage, sIndex) => {
    // console.log("sIndex:", sIndex)
    eventpage.removeSource(sIndex)
  }

  render() {
    const { data, forceUpdate } = this.props;
    const imagename = getImage(data.imageSrc);
    const { eventpage, userinfo } = this.props;
    const isCurrentUsers = data.poster === userinfo.getUserId();

    const childComponent = (
      <div className={classNames("source_box_list_item_conta")}>
        <div
          className={classNames("item_wrapper")}
          // onClick={() =>
          //   this.sampleAlert(`${data.title} / ${data.poster} / ${data.date}`)
          // }
        >
          <div className={classNames(`image_box${imagename? "" : "--has-image"}`)}>
            {imagename ? (
              <img src={imagename} className="source_box_image" alt={imagename}/>
            ) : null}
          </div>
          <div className={classNames("text_box")}>
            <div className={classNames("content_box")}>
              <div className={classNames("title")}>{data.title}</div>
              <div className={classNames("content")}>{data.content}</div>
            </div>
            <div className={classNames("info_box")}>
              <div className={classNames("info_box_poster")}>{data.poster}</div>
              <div className={classNames("info_box_date")}>{data.date}</div>
              <div
                className={classNames(
                  `edit_box${isCurrentUsers ? "--hover-active" : ""}`
                )}
              >
                <div
                  className="remove"
                  onClick={(e) =>
                    isCurrentUsers
                      ? (this.handleRemove(eventpage, data.sIndex),
                      forceUpdate(), e.stopPropagation())
                      : null
                  }
                >
                  <span>Remove</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        <ContentModal data={data} childComponent={childComponent} />
      </div>
    );
  }
}

export default SourceBoxListItem;
