import React, { Component } from "react";
import { Column, Row } from "simple-flexbox";
import { BreadCrumbs, SourceBox, QnABox, VerticalHr } from "pages/index.async.js";
import classNames from "classnames";
import "./Event.css";
import { observer, inject } from "mobx-react";

@inject("userinfo")
@observer
class Event extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    this.setState({ elementHeight: this.divRef.clientHeight });
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log("nextProps.userinfo.getUserId()",nextProps.userinfo.getUserId() !== this.state.currentUser)
    this.forceUpdate();
    return nextProps.userinfo.getUserId() !== this.state.currentUser
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  changeToThisUser = (userinfo, userName) => {
    userinfo.updateUserId(userName);
    this.setState({ currentUser: userName });
  };

  render() {
    const { match } = this.props;
    const { userinfo } = this.props;
    return (
      <div>
        <BreadCrumbs />
        {/* <h2>Event {match.params.name}</h2> */}
        <div className="select_user">
          <span>
            <strong>Select User</strong>
          </span>
          <div
            className="user_name"
            onClick={() => this.changeToThisUser(userinfo, "Keon")}
          >
            <span>Keon</span>
          </div>
          <div
            className="user_name"
            onClick={() => this.changeToThisUser(userinfo, "Nyoungwoo")}
          >
            <span>Nyoungwoo</span>
          </div>
          <div
            className="user_name"
            onClick={() => this.changeToThisUser(userinfo, "Yoonseo")}
          >
            <span>Yoonseo</span>
          </div>
          <div
            className="user_name"
            onClick={() => this.changeToThisUser(userinfo, "Evey")}
          >
            <span>Evey</span>
          </div>
        </div>
        <div className={classNames("eventpage_container")}>
          <Column flexGrow={1} ref={element => (this.divRef = element)}>
            <Row vertical="center">
              <Column flexGrow={1} horizontal="center">
                <SourceBox
                  eventName={match.params.name}
                  width={this.state.width * 0.4}
                  height={this.state.height * 0.8}
                />
              </Column>
              <VerticalHr height={"700"} />
              <Column flexGrow={1} horizontal="center">
                <QnABox
                  eventName={match.params.name}
                  width={this.state.width * 0.4}
                  height={this.state.height * 0.8}
                />
              </Column>
            </Row>
          </Column>
        </div>
      </div>
    );
  }
}

export default Event;
