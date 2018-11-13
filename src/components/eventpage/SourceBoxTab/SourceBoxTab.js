import React, { Component } from "react";
import VerticalHr from "components/VerticalHr";
import { Column, Row } from "simple-flexbox";
import classNames from "classnames";
import "./SourceBoxTab.scss";

class SourceBoxTab extends Component {
  state = {
    currentTab: "all"
  };

  render() {
    const { onTabClick, onClickToStore } = this.props;
    // console.log(this.state.currentTab);
    // const paddingSide = boxWidth / 8;
    return (
      <div className="container">
        <Column flexGrow={1}>
          <Row vertical="center">
            <Column
              className="column"
              flexGrow={1}
              horizontal="center"
              onClick={() => {
                this.setState({ currentTab: "all" });
                onTabClick("all");
                onClickToStore("all");
              }}
            >
              <div
                className={classNames(
                  "tab",
                  `all${this.state.currentTab === "all" ? "-active" : ""}`
                )}
              >
                All
              </div>
            </Column>
            <VerticalHr width={"1"} height={"15"} />
            <Column
              className="column"
              flexGrow={1}
              horizontal="center"
              onClick={() => {
                this.setState({ currentTab: "official" });
                onTabClick("official");
                onClickToStore("official");
              }}
            >
              <div
                className={classNames(
                  "tab",
                  `official${
                    this.state.currentTab === "official" ? "-active" : ""
                  }`
                )}
              >
                Official
              </div>
            </Column>
            <VerticalHr width={"1"} height={"15"} />
            <Column
              className="column"
              flexGrow={1}
              horizontal="center"
              onClick={() => {
                this.setState({ currentTab: "individual" });
                onTabClick("individual");
                onClickToStore("individual");
              }}
            >
              <div
                className={classNames(
                  "tab",
                  `individual${
                    this.state.currentTab === "individual" ? "-active" : ""
                  }`
                )}
              >
                Individual
              </div>
            </Column>
          </Row>
        </Column>
      </div>
    );
  }
}

export default SourceBoxTab;
