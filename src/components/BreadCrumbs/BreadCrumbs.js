import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import './BreadCrumbs.css';

@inject("userinfo")
@observer

class BreadCrumbs extends Component {
  render() {
  	const { match } = this.props;
  	return (
  		<div class="mainBox">
  			<div class="breadBox">
  				<div class="breadText">> Peace treaty will be signed > Stakeholder : South Korea</div>
  			</div>
  			<div class="breadTitleBox">
  				<div class="breadTitleText">“What is South Korea’s point of view in this event?”</div>
  			</div>
  		</div>
		);
  }
}

export default BreadCrumbs;
