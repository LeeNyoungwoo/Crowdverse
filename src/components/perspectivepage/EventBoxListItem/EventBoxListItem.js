import React, { Component } from "react";
import "./EventBoxListItem.css";

class EventBoxListItem extends Component {
	render(){
  	const { data } = this.props;

		return (
			<div class="eventBox">
				<div class="eventUpperBox">
					<img src={data.imageName} class="eventUpperImageBox"/>
					<div class="eventUpperRightBox"><div class="eventUpperRightTitle"><div>{data.title}</div></div></div>
				</div>
				<div class="eventLowerBox">
					<div class="eventLowerContentBox">{data.content}</div>
				</div>
			</div>

		);
	}
}

export default EventBoxListItem;