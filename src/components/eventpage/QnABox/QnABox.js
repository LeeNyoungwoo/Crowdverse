import React, { Component } from "react";
import "./QnABox.scss";

class sourceBox extends Component {
  render() {
    const { width, height } = this.props;
    return (
      <div style={{ width: width, height: height }}>
        <div className="header">
          <span className="header_title">Question & Answer</span>
          <br />
          <span className="header_desc">
            If you have any question about this perspective, You Can Ask.
          </span>
          <br />
          <span className="header_desc">
            If you can answer to other question, then You Can Answer.
          </span>
        </div>
      </div>
    );
  }
}

export default sourceBox;
