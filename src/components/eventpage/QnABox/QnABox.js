import React, { Component } from "react";
import { QnABoxItemPush, QnABoxList } from "pages/index.async.js";
import "./QnABox.scss";
import { observer, inject } from "mobx-react";

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

  forceUpdateQnABox = () => {
    this.forceUpdate();
  }

  render() {
    const { eventName, width, height } = this.props;
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
          <QnABoxItemPush qnaBoxWidth={width} eventName={eventName} forceUpdate={this.forceUpdateQnABox}/>
        </div>
        <QnABoxList dataList={eventpage.currentQnADataList} width={width} forceUpdate={this.forceUpdateQnABox}/>
      </div>
    );
  }
}

export default QnABox;
