import React, { Component } from "react";
import { Column, Row } from "simple-flexbox";
import { SourceBox, QnABox, VerticalHr } from "pages/index.async.js";
import classNames from "classnames";
import "./Event.scss";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  render() {
    const { match } = this.props;
    return (
      <div>
        <h1>
          Screen Size: width={this.state.width} height={this.state.height}
        </h1>
        <h2>Event {match.params.name}</h2>
        <div className={classNames("eventpage_container")}>
          <Column flexGrow={1}>
            <Row vertical="center">
              <Column flexGrow={1} horizontal="center">
                <SourceBox
                  width={this.state.width * 0.4}
                  height={this.state.height * 0.8}
                />
              </Column>
              <VerticalHr height={"500"} />
              <Column flexGrow={1} horizontal="center">
                <QnABox
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
