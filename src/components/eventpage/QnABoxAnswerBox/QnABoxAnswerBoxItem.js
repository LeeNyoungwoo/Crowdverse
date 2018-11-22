import React, { Component } from "react";
import classNames from "classnames";
import { GoThumbsup } from "react-icons/go";
import "./QnABoxAnswerBoxItem.css";
import { observer, inject } from "mobx-react";

//       {
//         answerContent: "answer1",
//         upvote: 13,
//         ansPoster: "ans_poster",
//         ansDate: "ans_date"
//       }

@inject("eventpage")
@inject("userinfo")
@observer
class QnABoxAnswerBoxItem extends Component {
  state = {
    isUnfoled: false,
    currentUser: ""
  };

  componentDidMount = () => {
    this.setState({ currentUser: this.props.userinfo.getUserId() });
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    return nextProps.userinfo.getUserId() !== this.state.currentUser;
  }

  handleUpvoteClick = (eventpage, qIndex, aIndex) => {
    eventpage.addOneUpvote(qIndex, aIndex);
  };

  handleRemove = (eventpage, qIndex, aIndex) => {
    // console.log("i'm in handleRemove")
    eventpage.removeAnswer(qIndex, aIndex);
  };

  render() {
    const { data, width, qIndex, forceUpdate } = this.props;
    const { eventpage, userinfo } = this.props;
    const iconSize = 25;
    const isCurrentUsers = data.ansPoster === userinfo.getUserId();

    return (
      <div
        className={classNames("answer_list_item_container")}
        style={{ width: width }}
      >
        <div
          className={classNames("item_wrapper")}
          ref={element => (this.divRef = element)}
        >
          <div className={classNames("answer_content")}>
            <div className={classNames("answer_title")}>
              <span>
                A{data.aIndex + 1}: {data.answerContent}
              </span>
            </div>
            <div className={classNames("answer_info")}>
              <div className={classNames("answer_info--poster")}>
                <span>{data.ansPoster}</span>
              </div>
              <div className={classNames("answer_info--date")}>
                <span>{data.ansDate}</span>
              </div>
            </div>
          </div>
          <div className={classNames("answer_upvote")}>
            <div
              className={classNames(
                `edit_box${isCurrentUsers ? "--hover-active" : ""}`
              )}
            >
              <div
                className="remove"
                onClick={() =>
                  isCurrentUsers
                    ? (this.handleRemove(eventpage, qIndex, data.aIndex),
                      forceUpdate())
                    : null
                }
              >
                <span>Remove</span>
              </div>
            </div>
            <div>
              <GoThumbsup
                className={classNames("answer_upvote_icon")}
                size={iconSize}
                onClick={() => {
                  this.handleUpvoteClick(eventpage, qIndex, data.aIndex);
                  forceUpdate();
                }}
              />
              <span>{data.upvote}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QnABoxAnswerBoxItem;
