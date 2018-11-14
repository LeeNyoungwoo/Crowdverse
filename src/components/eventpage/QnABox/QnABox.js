import React, { Component } from "react";
import { QnABoxItemPush, QnABoxList } from "pages/index.async.js";
import "./QnABox.scss";
import { observer, inject } from "mobx-react";

//description for DB data
//need one kind of retrieve api call: 1. get all data list
//need two kinds of insertion(modification) api call: 1. push the new question 2. push the answer on existing question data
// ...

@inject("eventpage")
@observer
class QnABox extends Component {
  componentWillMount() {
    //get datalist from db and add it to the eventpage.currentQnADataList by using eventpage.updateCurrentQnADataList function
    // eventpage.updateCurrentQnADataList(datalist from db)
  }

  componentDidUpdate() {
    //push store data to the db using eventpage.getCurrentQnADataList()
    // pushToDB(targetDataList: eventpage.getCurrentQnADataList())
  }

  render() {
    const { width, height } = this.props;
    const { eventpage } = this.props;

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
        <QnABoxList dataList={eventpage.currentQnADataList} width={width} />
      </div>
    );
  }
}

export default QnABox;
