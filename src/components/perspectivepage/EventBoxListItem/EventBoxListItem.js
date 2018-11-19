import React, { Component } from "react";
import "./EventBoxListItem.css";

class EventBoxListItem extends Component {
	render(){
  	const { data } = this.props;

		return (
			<div class="EventBox">
				<div class="EventImageBox">
		   		<img src={data.imageName} class="EventImage" alt="Event"/>
				</div>
				<div class="EventContentBox">
					<div class="EventContentTitle">{data.title}</div>
					<div class="EventContentContent">{data.content}</div>
				</div>
			</div>
		);
	}
}

export default EventBoxListItem;

