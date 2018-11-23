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

  handleCreate = (
    event,
    sourceTab,
    imageSrc,
    title,
    content,
    poster,
    date,
    link,
    nation
  ) => {
    const { eventpage, userinfo } = this.props;
    eventpage.addNewSource(
      event,
      sourceTab,
      imageSrc,
      title,
      content,
      poster,
      date,
      link,
      nation
    );
    // event: "event1",
    // sourceTab: "official",
    // imageSrc: "scr",
    // title: "official_title_2",
    // content: "content",
    // poster: "poster",
    // date: "date",
    // link: "",
    // perspective: "",
  };

  render() {
    const { open } = this.state;
    const {
      source,
      title,
      link,
      content,
      perspective
    } = this.state;
    const { childComponent, eventName, userinfo, forceUpdate } = this.props;
    // console.log(
    //   "handleCreate:",
    //   typeof this.props.eventpage.currentSourceDataList
    // );

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
            {(source === "official")
              ? <Form
                  placeholder="What is the title of source?"
                  title="Title"
                  name={title}
                  value={title}
                  onChange={this.handleTitleChange}
                />
              : null
            }
            <Form
              placeholder="URL"
              title="Link"
              name={link}
              value={link}
              onChange={this.handleLinkChange}
            />
            <Form
              placeholder="Please summarize the source n 1~2 sentences"
              title= {(source === "official") ? "Summary" : "Opinion"}
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
              onClick={() => {
                //event, sourceTab, imageSrc, title, content, poster, date, link, nation
                this.handleCreate(
                  eventName,
                  source,
                  "",
                  title,
                  content,
                  userinfo.userID,
                  this.getCurrentTimeInFormat(),
                  link,
                  perspective
                );
                forceUpdate();
                this.onCloseModal();
              }}
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
