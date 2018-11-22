import React, { Component } from "react";
import classNames from "classnames";
import { QnABoxListItem } from "pages/index.async.js";
import "./QnABoxList.scss";

class QnABoxList extends Component {
  render() {
    const { dataList, width, forceUpdate, isLoaded, Loading } = this.props;
    return (
      <div>
        {isLoaded ? (
          <div className={classNames("qna_box_list_container")}>
            <div className={classNames("list_wrapper")}>
              {dataList.map((data, index) => (
                <QnABoxListItem
                  key={index}
                  data={data}
                  width={width}
                  forceUpdate={forceUpdate}
                />
              ))}
            </div>
          </div>
        ) : (
          Loading
        )}
      </div>
    );
  }
}

export default QnABoxList;
