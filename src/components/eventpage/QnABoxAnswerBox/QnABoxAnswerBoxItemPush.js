import React, { Component } from "react";
import classNames from "classnames";
import autosize from "autosize";
import "./QnABoxAnswerBoxItemPush.css";
import { observer, inject } from "mobx-react";

@inject("eventpage")
@inject("userinfo")
@observer
class QnABoxAnswerBoxItemPush extends Component {
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

  handleSubmit = (eventpage, qIndex, answerContent, ansPoster, ansDate) => {
    if (answerContent.length!=0){
      eventpage.addNewAnswer(qIndex, answerContent, ansPoster, ansDate);
    }
   
  };

  render() {
    const { qIndex, width, forceUpdate } = this.props;
    const { eventpage, userinfo } = this.props;

    return (
      <div
        className={classNames("answer_item_push_container")}
        style={{ width: width }}
      >
        <form className={classNames("form")} onSubmit={this.handleSubmit}>
          <div className={classNames("textarea_box")}>
            <textarea
              className={classNames("textarea")}
              style={{ width: width * 0.8 }}
              placeholder=" Add a answer comment!"
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
                qIndex,
                this.state.value,
                userinfo.getUserId(),
                this.getCurrentTimeInFormat()
              );
              forceUpdate();
              this.setState({ value: "" });
              this.textarea.focus();
            }}
          >
            <div className={classNames("button")}>Add</div>
          </div>
        </form>
      </div>
    );
  }
}

export default QnABoxAnswerBoxItemPush;
