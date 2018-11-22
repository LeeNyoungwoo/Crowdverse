import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import './BreadCrumbs.css';

@inject("userinfo")
@observer

class BreadCrumbs extends Component {
  render() {
  	const { match } = this.props;
  	return (
  		<div className="mainBox">
  			<div className="breadBox">
  				<div className="breadText">> Home > Politics  </div>
  			</div>
  			<div className="breadTitleBox">
  				<div className="breadTitleText">“What is South Korea’s point of view in this event?”</div>
  			</div>
  		</div>
		);
  }
}

export default BreadCrumbs;
