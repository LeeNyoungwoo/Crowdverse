import React, { Component } from "react";
import Modal from 'react-responsive-modal';
import './ContentModal.css';
import { ContentComentPush } from "pages/index.async.js";
import { observer, inject } from "mobx-react";

import eraofnowar from '../../pages/Perspective/eraofnowar.jpg';

@inject("userinfo")
@inject("eventpage")
@observer

class ContentModal extends React.Component {
	state = {
		open: false,
	}

	state = {
    event: "event1",
		sourceTab: 'official',
    imageSrc: eraofnowar,
		title: 'Finally, ‘the Era of no war is coming, thanks to North Korea removing nuclear weapons', 
		content: 'How a curmudgeonly worldview can be useful in the rambunctious world of technology?',
    poster: "Nyoungwoo",
		date: '2018.11.22',
    link: "http://www.hani.co.kr/arti/politics/defense/862798.html",
  }

  forceUpdateContent = () => {
    this.forceUpdate();
  }

  onOpenModal = () => {
    this.setState({ open: true });
  }
 
  onCloseModal = () => {
    this.setState({ open: false });
  }

	render() {
		const { open, event, sourceTab, imageSrc, title, content, poster, date, link } = this.state;
		return (
				<div className="example">
        	<button className="btn btn-action" onClick={this.onOpenModal}>
          	ContentModal
        	</button>{' '}
        	<Modal open={open} backgroundColor='black' onClose={this.onCloseModal} center classNames={{modal: 'contentModalStyle'}}>
        		<div class="contentHeaderModalBox">
        			<div class="contentHeaderModalBoxText">{title}</div>
        		</div>
            <div class="contentInfoBox">
              <div class="contentInfoLeftBox">
                <div class="contentInfoLeftImageBox">
                  <img src={imageSrc} class="contentInfoLeftImage"/>
                </div>
              </div>
              <div class="contentInfoRightBox">
                <div class="contentInfoRightTextBox">
                  <div class="contentInfoRightHeader">Source Type : </div>
                  <div class="contentInfoRightContent">{sourceTab}</div>
                </div>
                <div class="contentInfoRightTextBox">
                  <div class="contentInfoRightHeader">Related Event : </div>
                  <div class="contentInfoRightContent">{event}</div>
                </div>
                <div class="contentInfoRightTextBox">
                  <div class="contentInfoRightHeader">Date : </div>
                  <div class="contentInfoRightContent">{date}</div>
                </div>
                <div class="contentInfoRightTextBox">
                  <div class="contentInfoRightHeader">Writer : </div>
                  <div class="contentInfoRightContent">{poster}</div>
                </div>
                <div class="contentInfoRightTextBox">
                  <div class="contentInfoRightHeader">Link : </div>
                  <div class="contentInfoRightContent"><a href={link} target="_blank">Go to that source</a></div>
                </div>
              </div>
            </div>
        		<div class="contentContentBox">
        			<div class="contentContentTextBox">{content}{content}{content}{content}{content}{content}</div>
        		</div>
        	</Modal>
      	</div>
		)
	}
}

export default ContentModal;
