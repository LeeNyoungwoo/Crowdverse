import { observable, action } from "mobx";

export default class UserInfoStore {
  @observable userID = "Keon";

  constructor(root) {
    this.root = root;
  }

  @action
  updateUserId = nextUser => {
    this.userID = nextUser;
  };

  @action
  getUserId = () => {
    return this.userID;
  };

  getUserIdForHeader = forceUpdateHeader => {
    forceUpdateHeader(this.userID);
    return;
  };
}
