import React, { Component } from "react";
import "./VerticalHr.scss";

class VerticalHr extends Component {
  render() {
    const { height } = this.props;
    return <hr size={height}/>;
  }
}

export default VerticalHr;
