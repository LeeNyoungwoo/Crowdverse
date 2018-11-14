import React, { Component } from "react";
import classNames from "classnames";
import autosize from 'autosize';
import "./QnABoxAnswerBoxItemPush.scss";

class QnABoxAnswerBoxItemPush extends Component {
  state = {
    value: "",
  };

  componentDidMount() {
    this.textarea.focus();
    autosize(this.textarea);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    // console.log(this.state.value);
  }

  getCurrentTimeInFormat = () => {
    var date = new Date();
    const currentDate = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()} ${date.toLocaleTimeString()}`;
    return currentDate;
  };

  render() {
    const { width } = this.props;
    const thisWidth = width * 0.8;
    return (
      <div
        className={classNames("answer_item_push_container")}
        style={{ width: thisWidth }}
      >
        <form className={classNames("form")} onSubmit={this.handleSubmit}>
          <div className={classNames("textarea_box")}>
            <textarea
              className={classNames("textarea")}
              style={{ width: thisWidth * 0.8 }}
              placeholder=" Add a answer comment!"
              value={this.state.value}
              onChange={event => this.handleChange(event)}
              ref={c=>this.textarea=c}
            />
          </div>
          <div className={classNames("button_box")}>
            <div className={classNames("button")}>Submit</div>
          </div>
        </form>
      </div>
    );
  }
}

export default QnABoxAnswerBoxItemPush;
