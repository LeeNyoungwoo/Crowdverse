import React, { Component } from "react";
import classNames from "classnames";
import { SourceBoxListItem, Loading } from "pages/index.async.js";
import "./SourceBoxList.css";

class SourceBoxList extends Component {
  render() {
    const { dataList, isLoaded, Loading, forceUpdate } = this.props;
    return (
      <div>
        {isLoaded ? (
          <div className={classNames("source_box_list_container")}>
            <div className={classNames("list_wrapper")}>
              {dataList.map((data, index) => (
                <SourceBoxListItem key={index} data={data} forceUpdate={forceUpdate}/>
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

export default SourceBoxList;
