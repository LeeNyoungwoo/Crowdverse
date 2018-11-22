import React, { Component } from "react";
import classNames from "classnames";
import autosize from "autosize";
import "./QnABoxItemPush.css";
import { observer, inject } from "mobx-react";

@inject("eventpage")
@inject("userinfo")
@observer
class QnABoxItemPush extends Component {
  state = {
    value: ""
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

  handleSubmit = (
    eventpage,
    event,
    questionContent,
    questionPoster,
    questionDate
  ) => {
    eventpage.addNewQuestion(
      event,
      questionContent,
      questionPoster,
      questionDate
    );
  };

  render() {
    const { eventName, qnaBoxWidth, forceUpdate } = this.props;
    const { eventpage, userinfo } = this.props;
    return (
      <div className={classNames("qna_box_item_push_container")}>
        <form className={classNames("form")} onSubmit={this.handleSubmit}>
          <div className={classNames("textarea_box")}>
            <textarea
              className={classNames("textarea")}
              style={{ width: qnaBoxWidth * 0.8 }}
              placeholder=" Ask a question, feel free!"
              value={this.state.value}
              onChange={event => this.handleChange(event)}
              ref={c => (this.textarea = c)}
            />
          </div>
          <div
            className={classNames("button_box")}
            onClick={() => {
              this.handleSubmit(
                eventpage,
                eventName,
                this.state.value,
                userinfo.getUserId(),
                this.getCurrentTimeInFormat()
              );
              forceUpdate();
              this.setState({value:""})
              this.textarea.focus();
            }}
          >
            <div className={classNames("button")}>Submit</div>
          </div>
        </form>
      </div>
    );
  }
}

export default QnABoxItemPush;
