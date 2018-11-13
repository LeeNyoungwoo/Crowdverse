import { observable, action } from 'mobx';

export default class EventPageStore {
  @observable currentTab = "all";

  constructor(root) {
    this.root = root;
  }

  @action
  updateCurrentTab = (currentTab) => {
    this.currentTab = currentTab;
  };
}
