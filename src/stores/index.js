import CounterStore from './counter';
import EventPageStore from './eventpage';

class RootStore {
  constructor() {
    this.counter = new CounterStore(this);
    this.eventpage = new EventPageStore(this);
  }
}

export default RootStore;