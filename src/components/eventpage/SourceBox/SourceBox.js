import React, { Component } from "react";
import "./SourceBox.scss";

class sourceBox extends Component {
  render() {
    const { width, height } = this.props;
    return (
      <div style={{ width: width, height: height }}>
        <div className="header">
          <span className="header_title">Sources</span>
          <br />
          <span className="header_desc">Any source you want to share</span>
        </div>
      </div>
    );
  }
}

export default sourceBox;
