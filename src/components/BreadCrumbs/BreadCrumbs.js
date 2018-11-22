import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";
import "./BreadCrumbs.css";

@inject("userinfo")
@observer
class BreadCrumbs extends Component {
  render() {
    const { match, breadCrumbs } = this.props;
    return (
      <div class="mainBox">
        {breadCrumbs}
        <div class="breadTitleBox">
          <div class="breadTitleText">
            “What is South Korea’s point of view in this event?”
          </div>
        </div>
      </div>
    );
  }
}

export default BreadCrumbs;
