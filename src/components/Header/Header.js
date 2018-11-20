import React, { Component } from "react";
import './Header.css';
import user from './user.png';

class Header extends Component {
	render() {
		return (
			<div class="headermain_Box">
				<div class="headerlogoBox">
					<div class="headerlogoText">CrowdVerse</div>
				</div>
				<div class="headerotherBox">
					<div class="headerbuttonBox">
						<button class="headerbutton">Sign in</button>
					</div>
					<div class="headeruserBox">
						<div class="headeruserNameBox"><div class="headeruserNameText">Random_nickname</div></div>
						<div class="headeruserImageBox"><img src={user} class="headeruserImage" alt="User"/></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;

