import React, { Component } from "react";
import classNames from "classnames";
import { GoThumbsup } from "react-icons/go";
import "./QnABoxAnswerBoxItem.scss";

//       {
//         answerContent: "answer1",
//         upvote: 13,
//         ansPoster: "ans_poster",
//         ansDate: "ans_date"
//       }

class QnABoxAnswerBoxItem extends Component {
  state = {
    isUnfoled: false
  };

  render() {
    const { data, width } = this.props;
    const iconSize = 25;

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
              <span>A: {data.answerContent}</span>
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
            <div>
              <GoThumbsup
                className={classNames("answer_upvote_icon")}
                size={iconSize}
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
