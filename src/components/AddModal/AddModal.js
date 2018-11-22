import React, { Component } from "react";
import Modal from "react-responsive-modal";
import "./AddModal.css";
import Form from "./Form";
import RadioForm from "./RadioForm";
import { observer, inject } from "mobx-react";

@inject("userinfo")
@inject("eventpage")
@observer
class AddModal extends React.Component {
  state = {
    open: false,
    source: "",
    title: "",
    link: "",
    content: "",
    perspective: ""
  };

  handleSourceChange = e => {
    this.setState({
      source: e.target.value
    });
  };

  handleTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleLinkChange = e => {
    this.setState({
      link: e.target.value
    });
  };

  handleSummaryChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handlePerspectiveChange = e => {
    this.setState({
      perspective: e.target.value
    });
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  getCurrentTimeInFormat = () => {
    var date = new Date();
    const currentDate = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()} ${date.toLocaleTimeString()}`;
    return currentDate;
  };

  handleCreate = (eventName, source, title, link, content, perspective) => {
    const { eventpage, userinfo } = this.props;
    eventpage.updateCurrentSourceDataList(
      eventpage.currentSourceDataList.push({
        event: eventName,
        sourceTab: source,
        imageSrc: "sample_source",
        title: title,
        content: content,
        poster: userinfo.getUserId(),
        date: this.getCurrentTimeInFormat(),
        link: link
      })
      // event: "event1",
      // sourceTab: "individual",
      // imageSrc: "scr",
      // title: "individual_title_1",
      // content: "content",
      // poster: "poster",
      // date: "date",
      // link: "",
    );
  };

  render() {
    const { open } = this.state;
    const { source, title, link, content, perspective } = this.state;
    const { childComponent, eventName } = this.props;
    console.log("handleCreate:",typeof this.props.eventpage.currentSourceDataList);

    return (
      <div className="example">
        <div className="btn btn-action" onClick={this.onOpenModal}>
          {childComponent}
        </div>{" "}
        <Modal open={open} onClose={this.onCloseModal} center>
          <div className="addmodalBox">
            <div className="addmodalTitleBox">
              <text className="addmodalTitleText">Please add new source</text>
            </div>
            <RadioForm
              title="Source"
              name={source}
              onChange={this.handleSourceChange}
            />
            <Form
              placeholder="What is the title of source?"
              title="Title"
              name={title}
              value={title}
              onChange={this.handleTitleChange}
            />
            <Form
              placeholder="URL"
              title="Link"
              name={link}
              value={link}
              onChange={this.handleLinkChange}
            />
            <Form
              placeholder="Please summarize the source n 1~2 sentences"
              title="Summary"
              name={content}
              value={content}
              onChange={this.handleSummaryChange}
            />
            <Form
              placeholder="Which perspective this source contatin?"
              title="Perspective"
              name={perspective}
              value={perspective}
              onChange={this.handlePerspectiveChange}
            />
          </div>
          <div className="addmodalInputButtonBox">
            <button
              className="addmodalButton"
              onClick={() =>
                this.handleCreate(eventName,source, title, link, content, perspective)
              }
            >
              Submit
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default AddModal;
