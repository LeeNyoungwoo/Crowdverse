import React, { Component } from "react";
import "./VerticalHr.css";

class VerticalHr extends Component {
  render() {
    const { width, height } = this.props;
    return <hr width={width} size={height} />;
  }
}

export default VerticalHr;
