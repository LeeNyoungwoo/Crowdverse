import React, { Component } from "react";
import Tabs from "./Tabs";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <h1>Screen Size: width={this.state.width} height={this.state.height}</h1>
        <h2>Event {match.params.name}</h2>
        <Tabs match={match} />
      </div>
    );
  }
}

export default Event;
