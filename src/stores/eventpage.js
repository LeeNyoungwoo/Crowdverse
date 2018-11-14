import { observable, action } from 'mobx';

export default class EventPageStore {
  @observable currentTab = "all"; //for SourceBox

  constructor(root) {
    this.root = root;
  }

  @action
  updateCurrentTab = (currentTab) => {
    this.currentTab = currentTab;
  };
}
