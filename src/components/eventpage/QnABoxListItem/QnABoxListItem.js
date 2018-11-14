import React, { Component } from "react";
import classNames from "classnames";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { QnABoxAnswerBox } from "pages/index.async.js";
import "./QnABoxListItem.scss";
import VerticalHr from "../../VerticalHr";

// {
//     event: "event1",
//     questionContent: "content1",
//     answerList: [
//       {
//         answerContent: "answer1",
//         upvote: 13,
//         ansPoster: "ans_poster",
//         ansDate: "ans_date"
//       }
//     ],
//     questionPoster: "qst_poster",
//     questionDate: "qst_date"
//   },

class QnABoxListItem extends Component {
  state = {
    isUnfoled: false
  };

  componentDidMount() {
    this.setState({ elementHeight: this.divRef.clientHeight });
  }

  render() {
    const { data, width } = this.props;

    return (
      <div className={classNames("qna_box_list_item_container")}>
        <div
          className={classNames("item_wrapper")}
          ref={element => (this.divRef = element)}
        >
          <div
            className={classNames("question_box")}
            onClick={() => this.setState({ isUnfoled: !this.state.isUnfoled })}
          >
            <div className={classNames("icon_arrow")}>
              {!this.state.isUnfoled ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>
            <div className={classNames("question_content")}>
              <div className={classNames("question_title")}>
                <span>Q: {data.questionContent}</span>
              </div>
              <div className={classNames("question_info")}>
                <div className={classNames("question_info--poster")}>
                  <span>{data.questionPoster}</span>
                </div>
                <div className={classNames("question_info--date")}>
                  <span>{data.questionDate}</span>
                </div>
              </div>
            </div>
          </div>
          <QnABoxAnswerBox
            answerDataList={data.answerList}
            isUnfoled={this.state.isUnfoled}
            width={width}
          />
        </div>
      </div>
    );
  }
}

// <div className={classNames("icon-verticalhr")}>
// <VerticalHr height={this.state.elementHeight} />
// </div>
// <span>{data.answerList.length}</span>

export default QnABoxListItem;
