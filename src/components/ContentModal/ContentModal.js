import React, { Component } from "react";
import Modal from 'react-responsive-modal';
import './ContentModal.css';
import { ContentComentPush } from "pages/index.async.js";
import { observer, inject } from "mobx-react";

@inject("userinfo")
@inject("eventpage")
@observer

class ContentModal extends React.Component {
	state = {
		open: false,
	}

	state = {
		source: '', 
		title: 'Finally, ‘the Era of no war is coming, thanks to North Korea removing nuclear weapons', 
		link: '', 
		content: 'How a curmudgeonly worldview can be useful in the rambunctious world of technology?',
		perspective: ''
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
		const { open, source, title, link, content } = this.state;
		return (
				<div className="example">
        	<button className="btn btn-action" onClick={this.onOpenModal}>
          	ContentModal
        	</button>{' '}
        	<Modal open={open} backgroundColor='black' onClose={this.onCloseModal} center classNames={{modal: 'contentModalStyle'}}>
        		<div class="contentHeaderModalBox">
        			<div class="contentHeaderModalBoxText">{title}</div>
        		</div>
        		<div class="contentContentBox">
              <div class="contentContentLinkBox">
                <div class="contentContentLinkText"><a href="http://www.hani.co.kr/arti/politics/defense/862798.html" target="_blank">Label</a></div>
              </div>
        			<div class="contentContentTextBox">{content}{content}{content}{content}{content}{content}</div>
        		</div>
        	</Modal>
      	</div>
		)
	}
}

export default ContentModal;
