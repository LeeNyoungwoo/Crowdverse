import { observable, action } from "mobx";

//description for DB data: currentSourceDataList
//each one of sampleListData is for each post
//it should have following 7 elements
//  ..., {
//    event: String (event name related to this post),
//    sourceTab: String (it MUST be either "official" or "individual"),
//    imageSrc: String (image url or scr),
//    title: String (post title which may from user input),
//    content: String (post content or summary which also may from user input),
//    poster: String (author of the post),
//    date: String or datetime (upload date)
//  }, ...
// you can check details by usage of sampleListData below.

export default class EventPageStore {
  constructor(root) {
    this.root = root;
  }

  //for SourceBox
  @observable currentTab = "all";
  @observable currentSourceDataList = [
    {
      event: "event1",
      sourceTab: "official",
      imageSrc: "scr",
      title: "official_title_1",
      content: "content",
      poster: "poster",
      date: "date"
    },
    {
      event: "event1",
      sourceTab: "individual",
      imageSrc: "scr",
      title: "individual_title_1",
      content: "content",
      poster: "poster",
      date: "date"
    },
    {
      event: "event1",
      sourceTab: "official",
      imageSrc: "scr",
      title: "official_title_2",
      content: "content",
      poster: "poster",
      date: "date"
    },
    {
      event: "event1",
      sourceTab: "individual",
      imageSrc: "scr",
      title: "individual_title_2",
      content: "content",
      poster: "poster",
      date: "date"
    },
    {
      event: "event1",
      sourceTab: "official",
      imageSrc: "scr",
      title: "official_title_3",
      content: "content",
      poster: "poster",
      date: "date"
    },
    {
      event: "event1",
      sourceTab: "individual",
      imageSrc: "scr",
      title: "individual_title_3",
      content: "content",
      poster: "poster",
      date: "date"
    },
    {
      event: "event1",
      sourceTab: "official",
      imageSrc: "scr",
      title: "official_title_4",
      content: "content",
      poster: "poster",
      date: "date"
    },
    {
      event: "event1",
      sourceTab: "individual",
      imageSrc: "scr",
      title: "individual_title_4",
      content: "content",
      poster: "poster",
      date: "date"
    },
    {
      event: "event1",
      sourceTab: "official",
      imageSrc: "scr",
      title: "official_title_5",
      content: "content",
      poster: "poster",
      date: "date"
    },
    {
      event: "event1",
      sourceTab: "individual",
      imageSrc: "scr",
      title: "individual_title_5",
      content: "content",
      poster: "poster",
      date: "date"
    }
  ];

  @action
  updateCurrentTab = currentTab => {
    this.currentTab = currentTab;
  };

  @action
  updateCurrentSourceDataList = currentSourceDataList => {
    this.currentSourceDataList = currentSourceDataList;
  };

  @action
  getCurrentSourceDataList = () => {
    return this.currentSourceDataList;
  };

  //for QnABox
  @observable currentQnADataList = [
    {
      event: "event1",
      qIndex: 0,
      questionContent: "content1",
      answerList: [
        {
          answerContent: "answer1",
          upvote: 13,
          ansPoster: "ans_poster",
          ansDate: "ans_date" //format: "10/3/2018 오후 9:10:40"
        }
      ],
      questionPoster: "qst_poster",
      questionDate: "qst_date" //format: "10/3/2018 오후 9:10:40"
    },
    {
      event: "event1",
      qIndex: 1,
      questionContent: "content2",
      answerList: [
        {
          answerContent: "answer1",
          upvote: 10,
          ansPoster: "ans_poster",
          ansDate: "ans_date"
        },
        {
          answerContent: "answer2",
          upvote: 10,
          ansPoster: "ans_poster",
          ansDate: "ans_date"
        }
      ],
      questionPoster: "qst_poster",
      questionDate: "qst_date"
    },
    {
      event: "event1",
      qIndex: 2,
      questionContent: "content3",
      answerList: [
        {
          answerContent: "answer1",
          upvote: 5,
          ansPoster: "ans_poster",
          ansDate: "ans_date"
        }
      ],
      questionPoster: "qst_poster",
      questionDate: "qst_date"
    }
  ];

  @action
  updateCurrentQnADataList = currentQnADataList => {
    this.currentQnADataList = currentQnADataList;
  };

  @action
  getCurrentQnADataList = () => {
    return this.currentQnADataList;
  };

  @action
  addNewQuestion = (event, questionContent, questionPoster, questionDate) => {
    this.currentQnADataList.push({
      event: event,
      qIndex: this.currentQnADataList.length,
      questionContent: questionContent,
      answerList: [],
      questionPoster: questionPoster,
      questionDate: questionDate
    });
  };

  @action
  addNewAnswer = (qIndex, answerContent, ansPoster, ansDate) => {
    this.currentQnADataList.map(data =>
      data.qIndex === qIndex
        ? data.answerList.push({
            answerContent: answerContent,
            upvote: 0,
            ansPoster: ansPoster,
            ansDate: ansDate
          })
        : null
    );
  };
}
