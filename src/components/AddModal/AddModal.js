import React, { Component } from "react";
import Modal from 'react-responsive-modal';
import './AddModal.css';
import Form from './Form'
import RadioForm from './RadioForm'
import { observer, inject } from "mobx-react";

@inject("userinfo")
@inject("eventpage")
@observer
class AddModal extends React.Component {
  state = {
    open: false,
	}

	state = {source: '', title: '', link: '', content: '', perspective: ''}

  handleSourceChange = (e) => {
    this.setState({
      source: e.target.value,
    });
  }

  handleTitleChange = (e) => {
  	this.setState({
  		title: e.target.value,
  	});
  }

  handleLinkChange = (e) => {
  	this.setState({
  		link: e.target.value,
  	});
  }

  handleSummaryChange = (e) => {
  	this.setState({
  		content: e.target.value,
  	});
  }

  handlePerspectiveChange = (e) => {
  	this.setState({
  		perspective: e.target.value,
  	});
  }

  onOpenModal = () => {
    this.setState({ open: true });
  }
 
  onCloseModal = () => {
    this.setState({ open: false });
  }

  getCurrentTimeInFormat = () => {
    var date = new Date();
    const currentDate = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()} ${date.toLocaleTimeString()}`;
    return currentDate;
  }

  handleCreate = (source, title, link, content, perspective) => {
    const {eventpage, userinfo} = this.props;
    console.log(eventpage.getCurrentSourceDataList())
    eventpage.updateCurrentSourceDataList(eventpage.currentSourceDataList.push(
    {
      event: "sample_event",
      sourceTab: source,
      imageSrc: "sample_source",
      title: title,
      content: content,
      poster: userinfo.getUserId(),
      date: this.getCurrentTimeInFormat(),
      link: link,
    }))
  }
 
  render() {
    const { open } = this.state;
    const {source, title, link, content, perspective} = this.state;

    return (
      <div className="example">
        <button className="btn btn-action" onClick={this.onOpenModal}>
          AddModal
        </button>{' '}
        <Modal open={open} onClose={this.onCloseModal} center>
        	<div class="addmodalBox">
        		<div class="addmodalTitleBox"><text class="addmodalTitleText">Please add new source</text></div>
            <RadioForm
              title='Source'
              name={source}
              onChange={this.handleSourceChange}
            />
        		<Form
        			placeholder= 'What is the title of source?'
        			title='Title'
        			name={title}
        			value={title}
        			onChange={this.handleTitleChange}
        		/>
        		<Form
        			placeholder='URL'
        			title='Link'
        			name={link}
        			value={link}
        			onChange={this.handleLinkChange}
        		/>
        		<Form
        			placeholder='Please summarize the source n 1~2 sentences'
        			title='Summary'
        			name={content}
        			value={content}
        			onChange={this.handleSummaryChange}
        		/>
        		<Form
        			placeholder='Which perspective this source contatin?'
        			title='Perspective'
        			name={perspective}
        			value={perspective}
        			onChange={this.handlePerspectiveChange}
        		/>
          </div>
          <div class="addmodalInputButtonBox"><button class="addmodalButton" onClick={()=>this.handleCreate(source, title, link, content, perspective)}>Submit</button></div>
        </Modal>
      </div>
    );
  }
}

export default AddModal;
