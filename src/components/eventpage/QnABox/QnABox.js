import React, { Component } from "react";
import { QnABoxItemPush, QnABoxList, Loading } from "pages/index.async.js";
import "./QnABox.scss";
import { observer, inject } from "mobx-react";
import fire from "../../../fire";

@inject("eventpage")
@observer
class QnABox extends Component {
  state = {
    isLoaded: false
  };
  componentWillMount() {
    //get datalist from db and add it to the eventpage.currentQnADataList by using eventpage.updateCurrentQnADataList function
    // eventpage.updateCurrentQnADataList(datalist from db)
    this.getData();
  }

  getData = async () => {
    await fire
      .database()
      .ref("qna")
      .on("value", snapshot => {
        console.log(snapshot.val());
        this.props.eventpage.updateCurrentQnADataList(snapshot.val());
        this.setState({ isLoaded: true });
      });
  };

  componentDidUpdate() {
    //push store data to the db using eventpage.getCurrentQnADataList()
    // pushToDB(targetDataList: eventpage.getCurrentQnADataList())
    fire
      .database()
      .ref("qna")
      .set(this.props.eventpage.getCurrentQnADataList());
  }

  forceUpdateQnABox = () => {
    this.forceUpdate();
  };

  render() {
    const { eventName, width, height } = this.props;
    const { eventpage } = this.props;

    return (
      <div style={{ width: width, height: height }}>
        <div>
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
            <QnABoxItemPush
              qnaBoxWidth={width}
              eventName={eventName}
              forceUpdate={this.forceUpdateQnABox}
            />
          </div>
          <QnABoxList
            dataList={eventpage.currentQnADataList}
            width={width}
            height={height}
            forceUpdate={this.forceUpdateQnABox}
            isLoaded={this.state.isLoaded}
            Loading={<Loading width={width} height={height} />}
          />
        </div>
      </div>
    );
  }
}

export default QnABox;
