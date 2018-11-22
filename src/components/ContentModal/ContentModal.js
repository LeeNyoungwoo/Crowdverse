import React, { Component } from "react";
import Modal from "react-responsive-modal";
import "./ContentModal.css";
import { ContentComentPush } from "pages/index.async.js";
import { observer, inject } from "mobx-react";

import eraofnowar from "../../pages/Perspective/eraofnowar.jpg";

import getImage from '../../utils';

@inject("userinfo")
@inject("eventpage")
@observer
class ContentModal extends React.Component {
  state = {
    // event: "event1",
    // sourceTab: 'official',
    // imageSrc: eraofnowar,
    // title: 'Finally, ‘the Era of no war is coming, thanks to North Korea removing nuclear weapons',
    // content: 'How a curmudgeonly worldview can be useful in the rambunctious world of technology?',
    // poster: "Nyoungwoo",
    // date: '2018.11.22',
    // link: "http://www.hani.co.kr/arti/politics/defense/862798.html",
    open: false
  };

  forceUpdateContent = () => {
    this.forceUpdate();
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    // const { open, event, sourceTab, imageSrc, title, content, poster, date, link } = this.state;
    const { data, childComponent } = this.props;
    const imagename = getImage(data.imageSrc);
    return (
      <div className="example">
        <div onClick={this.onOpenModal}>{childComponent}</div>{" "}
        <Modal
          open={this.state.open}
          backgroundColor="black"
          onClose={this.onCloseModal}
          center
          classNames={{ modal: "contentModalStyle" }}
        >
        {(data.sourceTab === "individual") 
          ? null 
          : (<div className="contentHeaderModalBox">
            <div className="contentHeaderModalBoxText">{data.title}</div>
          </div>)}
          <div className="contentInfoBox">
            <div className="contentInfoLeftBox">
              <div className="contentInfoLeftImageBox">
                <img src={imagename} className="contentInfoLeftImage" />
              </div>
            </div>
            <div class="contentInfoRightBox">
              <div class="contentInfoRightTextBox">
                <div class="contentInfoRightHeader">Source Type : </div>
                <div class="contentInfoRightContent">{data.sourceTab}</div>
              </div>
              <div className="contentInfoRightTextBox">
                <div className="contentInfoRightHeader">Related Event : </div>
                <div className="contentInfoRightContent">{data.event}</div>
              </div>
              <div className="contentInfoRightTextBox">
                <div className="contentInfoRightHeader">Date : </div>
                <div className="contentInfoRightContent">{data.date}</div>
              </div>
              <div className="contentInfoRightTextBox">
                <div className="contentInfoRightHeader">Writer : </div>
                <div className="contentInfoRightContent">{data.poster}</div>
              </div>
              <div className="contentInfoRightTextBox">
                <div className="contentInfoRightHeader">Link : </div>
                <div className="contentInfoRightContent">
                  <a href={data.link} target="_blank">
                    Go to the source
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="contentContentBox">
            <div className="contentContentTextBox">{data.content}</div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ContentModal;
