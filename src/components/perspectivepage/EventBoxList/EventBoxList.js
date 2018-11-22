import React, { Component } from "react";
import { Link } from "react-router-dom";
import { EventBoxListItem, EventPerspectiveList } from "pages/index.async.js";
import "./EventBoxList.css";

class EventBoxList extends Component {
  render() {
    const { eventList} = this.props;
    return (
      <div>
        <div class="event_box_list_container">
          {eventList.map((data, index) => (
            <EventBoxListItem
              key={index}
              data={data}
              eventName={data.title}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default EventBoxList;
