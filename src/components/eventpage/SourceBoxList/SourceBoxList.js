import React, { Component } from "react";
import classNames from "classnames";
import { SourceBoxListItem } from "pages/index.async.js";
import "./SourceBoxList.scss";

class SourceBoxList extends Component {
  render() {
    const { dataList } = this.props;
    return (
      <div className={classNames("source_box_list_container")}>
        <div className={classNames("list_wrapper")}>
          {dataList.map((data, index) => (
            <SourceBoxListItem key={index} data={data} />
          ))}
        </div>
      </div>
    );
  }
}

export default SourceBoxList;
