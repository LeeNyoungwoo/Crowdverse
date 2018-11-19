import React, { Component } from "react";
import { EventBoxListItem } from "pages/index.async.js";
import "./EventBoxList.css";

class EventBoxList extends Component {
  render() {
    const { eventList } = this.props;
    return (
      <div class="event_box_list_container">
        {eventList.map((data) => (
          <EventBoxListItem data={data} />
        ))}
      </div>
    );
  }
}

export default EventBoxList;