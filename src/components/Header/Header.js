import React from "react";
import './Header.css';

const Header = ({ match }) => {

	return (
		<div class="main_box">
	  	<div class="logo headerBox"><p class="contentHeader">CrowdVerse</p></div>
	  	<div class="login loginBox">
	   		<button class="button">Sign in</button>
	   		<p class="contextNickName">Random_nickname</p>
	   		<img src="./user.png" class="userImage"/>
	   	</div>
		</div>
  );
};

export default Header;

