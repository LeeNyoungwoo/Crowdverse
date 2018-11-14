import React, { Component } from "react";
import { QnABoxItemPush, QnABoxList } from "pages/index.async.js";
import "./QnABox.scss";

//description for DB data
//need one kind of retrieve api call: 1. get all data list
//need two kinds of insertion(modification) api call: 1. push the new question 2. push the answer on existing question data
// ...

const sampleListData = [
  {
    event: "event1",
    questionContent: "content1",
    answerList: [
      {
        answerContent: "answer1",
        upvote: 13,
        ansPoster: "ans_poster",
        ansDate: "ans_date" //format: "10/3/2018 오후 9:10:40"
      }
    ],
    questionPoster: "qst_poster",
    questionDate: "qst_date" //format: "10/3/2018 오후 9:10:40"
  },
  {
    event: "event1",
    questionContent: "content2",
    answerList: [
      {
        answerContent: "answer1",
        upvote: 10,
        ansPoster: "ans_poster",
        ansDate: "ans_date"
      },
      {
        answerContent: "answer2",
        upvote: 10,
        ansPoster: "ans_poster",
        ansDate: "ans_date"
      }
    ],
    questionPoster: "qst_poster",
    questionDate: "qst_date"
  },
  {
    event: "event1",
    questionContent: "content3",
    answerList: [
      {
        answerContent: "answer1",
        upvote: 5,
        ansPoster: "ans_poster",
        ansDate: "ans_date"
      }
    ],
    questionPoster: "qst_poster",
    questionDate: "qst_date"
  }
];

class sourceBox extends Component {
  render() {
    const { width, height } = this.props;
    return (
      <div style={{ width: width, height: height }}>
        <div className="header">
          <span className="header_title">Question & Answer</span>
          <br />
          <span className="header_desc">
            If you have any question about this perspective,{" "}
            <strong>You Can Ask.</strong>
          </span>
          <br />
          <span className="header_desc">
            If you can answer to other question, then{" "}
            <strong>You Can Answer.</strong>
          </span>
        </div>
        <div>
          <QnABoxItemPush qnaBoxWidth={width} />
        </div>
        <QnABoxList dataList={sampleListData} width={width}/>
      </div>
    );
  }
}

export default sourceBox;
