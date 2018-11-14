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
    const {
      qIndex,
      answerDataList,
      isUnfoled,
      width,
      forceUpdate
    } = this.props;
    const answerBoxWidth = width * 0.9;
    return (
      <div className={classNames("answer_box_container")}>
        <div className={classNames("answer_wrapper")}>
          {isUnfoled
            ? answerDataList.map((data, index) => (
                <QnABoxAnswerBoxItem
                  key={index}
                  data={data}
                  width={answerBoxWidth}
                />
              ))
            : null}
          {isUnfoled ? (
            <QnABoxAnswerBoxItemPush
              qIndex={qIndex}
              width={answerBoxWidth}
              forceUpdate={forceUpdate}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

// <QnABoxAnswerBoxItem key={index} data={data} />

export default QnABoxAnswerBox;
