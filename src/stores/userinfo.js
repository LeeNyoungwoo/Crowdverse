import { observable, action } from "mobx";

export default class UserInfoStore {
  @observable userID = "anonymous_user1";

  constructor(root) {
    this.root = root;
  }

  @action
  updateUserId = nextUser => {
    this.userID = nextUser;
  };
}
