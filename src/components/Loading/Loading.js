import React, { Component } from "react";
import { Column, Row } from "simple-flexbox";
import classNames from "classnames";
import "./Loading.css";

class Loading extends Component {
  render() {
    const { width, height } = this.props;
    console.log("height:", height)
    return (
      <div
        className={classNames("container")}
        stype={{ width: width, hegith: height }}
      >
        <div className={classNames("wrapper")}>
          <div>
            <h3>Loading...</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
