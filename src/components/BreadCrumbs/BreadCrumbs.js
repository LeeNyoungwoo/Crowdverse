import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";
import "./BreadCrumbs.css";

@inject("userinfo")
@observer
class BreadCrumbs extends Component {
  makeUpperCategoryName = category => {
    if (category === "Politics") {
      return "POLITICS";
    }
    if (category === "Social") {
      return "SOCIAL";
    }
    if (category === "Culture") {
      return "CULTURE";
    }
  };

  render() {
    const { match, breadCrumbs, category, breadTitle } = this.props;
    return (
      <div className="mainBox">
        {breadCrumbs}
        <div className="breadTitleBox">
          <div className="breadTitleText">
            {breadTitle
              ? breadTitle
              : `${this.makeUpperCategoryName(
                  category
                )} : Latest and breaking news nowadays`}
          </div>
        </div>
      </div>
    );
  }
}

export default BreadCrumbs;
