import React, { Component } from "react";
import classNames from "classnames";
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
    const { data } = this.props;

    return (
      <div className={classNames("answer_list_item_container")}>
        <div
          className={classNames("item_wrapper")}
          ref={element => (this.divRef = element)}
        >
          <span>{data.answerContent}</span>
          <span>{data.upvote}</span>
          <span>{data.ansPoster}</span>
          <span>{data.ansDate}</span>
        </div>
      </div>
    );
  }
}

export default QnABoxAnswerBoxItem;
