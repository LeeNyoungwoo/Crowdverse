import React, { Component } from "react";
import "./EventBoxListItem.css";
import korea from "../../../pages/Home/Korea.png";
import us from "../../../pages/Home/US.png";
import china from "../../../pages/Home/China.png";
import { EventPerspectiveList } from "pages/index.async.js";

const numofperspective = [
  {
    nationalimg: korea,
    nationaltitle: "Korea",
    people: 21,
    discussion: 23
  },
  {
    nationalimg: us,
    nationaltitle: "U.S.",
    people: 9,
    discussion: 10
  },
  {
    nationalimg: china,
    nationaltitle: "China",
    people: 5,
    discussion: 2
  }
];

class EventBoxListItem extends Component {
  state = {
    isExtended: false
  };
  render() {
    const { data, eventName } = this.props;

    return (
      <div>
        <div
          className="eventBox"
          onClick={() => this.setState({ isExtended: !this.state.isExtended })}
        >
          <div className="eventUpperBox">
            <img
              src={data.imageName}
              className="eventUpperImageBox"
              alt={data.imageName}
            />
            <div className="eventUpperRightBox">
              <div className="eventUpperRightTitle">
                <div>{data.title}</div>
              </div>
            </div>
          </div>
          <div className="eventLowerBox">
            <div className="eventLowerContentBox">{data.content}</div>
          </div>
        </div>
        {this.state.isExtended ? (
          <EventPerspectiveList
            perspectivelist={numofperspective}
            eventName={eventName}
          />
        ) : null}
      </div>
    );
  }
}

export default EventBoxListItem;
