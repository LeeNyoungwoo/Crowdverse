import React, { Component } from "react";
import "./EventPerspectiveListItem.css";

class EventPerspectiveListItem extends Component {
  render(){
    const { data } = this.props;

    return (
      <div className="EventPerspectiveBox">
        <img src={data.nationalimg} className="EventPerspectiveImage"/>
        <div className="EventPerspectiveName">{data.nationaltitle}</div>
        <div className="EventPerspectivePeopleBox">
          <div className="EventPerspectiveNumText">{data.people}</div>
          <div className="otherPerspectiveText">people</div>
        </div>
        <div className="EventPerspectiveDiscussionBox">
          <div className="EventPerspectiveNumText">{data.discussion}</div>
          <div className="otherPerspectiveText">discussion</div>
        </div>
      </div>
    );
  }
}

export default EventPerspectiveListItem;