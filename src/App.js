
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import {
  Home,
  Perspective,
  Event,
} from "pages/index.async.js";
import { Menu } from "components";
import { Header } from "pages/index.async.js";

class App extends Component {
  state = {
    OptionalComponent: false
  };

  showOptionalComponent = () => {
    this.setState({
      OptionalComponent: !this.state.OptionalComponent
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/perspective/:name" component={Perspective} />
          <Route path="/event/:name?" component={Event} />
        </Switch>
        {/* <Route path="/about/:name?" component={About} /> */}
        {/*<Route path="/tabs" component={Tabs} />*/}
        {/*<ShowPageInfo />*/}
      </div>
    );
  }
}

// <Counter />
// {this.state.OptionalComponent && (
//   <OptionalComponent />
// ) /* OptionalComponent 가 유효하면 렌더링 */}
// <button onClick={this.showOptionalComponent}>ClickMe</button>

export default App;
