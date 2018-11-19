import React, { Component } from "react";
import './Header.css';
import user from './user.png';

// class Header extends Component {
//   render() {
// 		return (
// 			<div class="main_box">
// 		  	<div class="logo headerBox"><p class="contentHeader">CrowdVerse</p></div>
// 		  	<div class="login loginBox">
// 		  		<div class="buttonBox"><button class="button">Sign in</button></div>
// 		   		<p class="contextNickName">Random_nickname</p>
// 		   		<div class="imageBox"><img src={user} class="userImage" alt="User"/></div>
// 		   	</div>
// 			</div>
// 	  )
// 	}
// }

// export default Header;

class Header extends Component {
	render() {
		return (
			<div class="main_Box">
				<div class="logoBox">
					<div class="logoText">CrowdVerse</div>
				</div>
				<div class="otherBox">
					<div class="buttonBox">
						<button class="button">Sign in</button>
					</div>
					<div class="userBox">
						<div class="userNameBox"><div class="userNameText">Random_nickname</div></div>
						<div class="userImageBox"><img src={user} class="userImage" alt="User"/></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;

