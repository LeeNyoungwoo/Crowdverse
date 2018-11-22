import React, { Component } from "react";
import { Link } from "react-router-dom";
import { EventPerspectiveListItem } from "pages/index.async.js";
import "./EventPerspectiveList.css";

class EventPerspectiveList extends Component {
  render() {
    const { perspectivelist, eventName, nation } = this.props;
    return (
      <div className="event_perspective_container">
        {perspectivelist.map((data, index) =>
          eventName === "‘Era of no war’ is coming" ? (
            <Link key={index} to={`/event/TheEraofNoWar/${data.nationaltitle}`} style={{ textDecoration: "none" }}>
              <EventPerspectiveListItem data={data} />
            </Link>
          ) : (
            <EventPerspectiveListItem key={index} data={data} />
          )
        )}
      </div>
    );
  }
}

export default EventPerspectiveList;
