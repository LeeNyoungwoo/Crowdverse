import React, { Component } from "react";
import "./EventBoxListItem.css";

class EventBoxListItem extends Component {
	render(){
  	const { data } = this.props;

		return (
			<div className="eventBox">
				<div className="eventUpperBox">
					<img src={data.imageName} className="eventUpperImageBox"/>
					<div className="eventUpperRightBox"><div className="eventUpperRightTitle"><div>{data.title}</div></div></div>
				</div>
				<div className="eventLowerBox">
					<div className="eventLowerContentBox">{data.content}</div>
				</div>
			</div>

		);
	}
}

export default EventBoxListItem;