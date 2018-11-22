import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";
import "./BreadCrumbs.css";

@inject("userinfo")
@observer
class BreadCrumbs extends Component {
  render() {
    const { match, breadCrumbs, category } = this.props;
    return (
      <div className="mainBox">
        {breadCrumbs}
        <div className="breadTitleBox">
          <div className="breadTitleText">
            {`"What events are there in '${category}' category?"`}
          </div>
        </div>
      </div>
    );
  }
}

export default BreadCrumbs;
