import { observable, action } from "mobx";
import fire from '../fire';

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
      date: "date",
      link: "",
      perspective: "",
    },
    {
      event: "event1",
      sourceTab: "individual",
      imageSrc: "scr",
      title: "individual_title_1",
      content: "content",
      poster: "poster",
      date: "date",
      link: "",
      perspective: "",
    },
    {
      event: "event1",
      sourceTab: "official",
      imageSrc: "scr",
      title: "official_title_2",
      content: "content",
      poster: "poster",
      date: "date",
      link: "",
      perspective: "",
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
      perspective: "",
      qIndex: 0,
      questionContent: "content1",
      answerList: [
        {
          qIndex: 0,
          answerContent: "answer1",
          aIndex: 0,
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
      perspective: "",
      qIndex: 1,
      questionContent: "content2",
      answerList: [
        {
          qIndex: 1,
          answerContent: "answer1",
          aIndex: 0,
          upvote: 10,
          ansPoster: "ans_poster",
          ansDate: "ans_date"
        },
        {
          qIndex: 1,
          answerContent: "answer2",
          aIndex: 1,
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
      perspective: "",
      qIndex: 2,
      questionContent: "content3",
      answerList: [
        {
          qIndex: 2,
          answerContent: "answer1",
          aIndex: 0,
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
  addNewQuestion = (event, nation, questionContent, questionPoster, questionDate) => {
    this.currentQnADataList.push({
      event: event,
      perspective: nation,
      qIndex: this.currentQnADataList.length,
      questionContent: questionContent,
      answerList: [
        {
          qIndex: this.currentQnADataList.length,
          answerContent: "What is your opinion? Add your answers below.",
          aIndex: 0,
          upvote: 0,
          ansPoster: "CrowdVerse",
          ansDate: " "
        }
      ],
      questionPoster: questionPoster,
      questionDate: questionDate
    });

  };

  @action
  addNewAnswer = (qIndex, answerContent, ansPoster, ansDate) => {
    this.currentQnADataList.forEach(data =>
      data.qIndex === qIndex
        ? data.answerList.push({
            qIndex: qIndex,
            answerContent: answerContent,
            aIndex: data.answerList.length,
            upvote: 0,
            ansPoster: ansPoster,
            ansDate: ansDate
          })
        : null
    );
  };

  // @action

  reOrderingAnswerListOfThisQuestion = qIndex => {
    this.currentQnADataList.forEach(data =>
      data.qIndex === qIndex
        ? data.answerList.forEach((answer, index) => (answer.aIndex = index))
        : null
    );
  };

  @action
  removeAnswer = (qIndex, aIndex) => {
    console.log(qIndex, aIndex);
    this.currentQnADataList.forEach(data =>
      data.qIndex === qIndex
        ? data.answerList.forEach(answer =>
            answer.aIndex === aIndex
              ? data.answerList.indexOf(answer) > -1
                ? data.answerList.splice(data.answerList.indexOf(answer), 1)
                : null
              : null
          )
        : null
    );
    this.reOrderingAnswerListOfThisQuestion(qIndex);
    console.log(this.currentQnADataList);
    // this.updateCurrentQnADataList(newDataList);
  };

  @action
  addOneUpvote = (qIndex, aIndex) => {
    this.currentQnADataList.forEach(data =>
      data.qIndex === qIndex
        ? data.answerList.forEach(answer =>
            answer.aIndex === aIndex
              ? (answer.upvote = answer.upvote + 1)
              : null
          )
        : null
    );
  };
}
