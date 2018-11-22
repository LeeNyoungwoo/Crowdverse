import React, { Component } from "react";
import "./EventPerspectiveListItem.css";

class EventPerspectiveListItem extends Component {
  render(){
    const { data } = this.props;

    return (
      <div class="EventPerspectiveBox">
        <img src={data.nationalimg} class="EventPerspectiveImage"/>
        <div class="EventPerspectiveName">{data.nationaltitle}</div>
        <div class="EventPerspectivePeopleBox">
          <div class="EventPerspectiveNumText">{data.people}</div>
          <div class="otherPerspectiveText">people</div>
        </div>
        <div class="EventPerspectiveDiscussionBox">
          <div class="EventPerspectiveNumText">{data.discussion}</div>
          <div class="otherPerspectiveText">discussion</div>
        </div>
      </div>
    );
  }
}

export default EventPerspectiveListItem;