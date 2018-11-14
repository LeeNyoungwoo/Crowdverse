import React, { Component } from "react";
import classNames from "classnames";
import QnABoxAnswerBoxItem from "./QnABoxAnswerBoxItem";
import QnABoxAnswerBoxItemPush from "./QnABoxAnswerBoxItemPush";
import "./QnABoxAnswerBox.scss";

//       {
//         answerContent: "answer1",
//         upvote: 13,
//         ansPoster: "ans_poster",
//         ansDate: "ans_date"
//       }

class QnABoxAnswerBox extends Component {
  render() {
    const { answerDataList, isUnfoled, width } = this.props;
    return (
      <div className={classNames("answer_box_list_container")}>
        <div className={classNames("answer_list_wrapper")}>
          {isUnfoled
            ? answerDataList.map((data, index) => (
                <QnABoxAnswerBoxItem key={index} data={data} />
              ))
            : null}
          {isUnfoled ? <QnABoxAnswerBoxItemPush width={width} /> : null}
        </div>
      </div>
    );
  }
}

// <QnABoxAnswerBoxItem key={index} data={data} />

export default QnABoxAnswerBox;
