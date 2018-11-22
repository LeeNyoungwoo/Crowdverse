import React, { Component } from "react";
import { EventBoxListItem, EventPerspectiveList } from "pages/index.async.js";
import "./EventBoxList.css";

import korea from '../../../pages/Home/Korea.png';
import us from '../../../pages/Home/US.png';
import china from '../../../pages/Home/China.png';

const numofperspective = [
  {
    nationalimg : korea,
    nationaltitle: "Korea",
    people: 21,
    discussion: 23 
  },
  {
    nationalimg : us,
    nationaltitle: "U.S.",
    people: 9,
    discussion: 10 
  },
  {
    nationalimg : china,
    nationaltitle: "China",
    people: 5,
    discussion: 2 
  }
]

class EventBoxList extends Component {
  render() {
    const { eventList } = this.props;
    return (
      <div>
        <div className="event_box_list_container">
          {eventList.map((data) => (
            <EventBoxListItem data={data} />
          ))}
        </div>
        <EventPerspectiveList perspectivelist={numofperspective} />
      </div>
    );
  }
}

export default EventBoxList;