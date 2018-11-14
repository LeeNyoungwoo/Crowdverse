import CounterStore from './counter';
import EventPageStore from './eventpage';
import UserInfoStore from './userinfo';

class RootStore {
  constructor() {
    this.counter = new CounterStore(this);
    this.eventpage = new EventPageStore(this);
    this.userinfo = new UserInfoStore(this);
  }
}

export default RootStore;