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
  				<div class="breadText">> Home > Politics  </div>
  			</div>
  			<div class="titleBox">
  				<div class="titleText">Political Events Happening Around the Globe</div>
  			</div>
  		</div>
		);
  }
}

export default BreadCrumbs;
