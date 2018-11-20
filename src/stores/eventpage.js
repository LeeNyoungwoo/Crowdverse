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
  @observable currentSourceDataList = [];

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
  @observable currentQnADataList = [];

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
