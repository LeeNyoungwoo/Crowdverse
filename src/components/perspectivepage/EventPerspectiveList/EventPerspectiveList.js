import React, { Component } from "react";
import { EventPerspectiveListItem } from "pages/index.async.js";
import "./EventPerspectiveList.css";

class EventPerspectiveList extends Component {
  render() {
    const { perspectivelist } = this.props;
    return (
      <div class="event_perspective_container">
        {perspectivelist.map((data) => (
          <EventPerspectiveListItem data={data} />
        ))}
      </div>
    );
  }
}

export default EventPerspectiveList;