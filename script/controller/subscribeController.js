import { store } from "../store/store.js";

export class subscribeData {
  constructor() {
    this.subscriber = new store();
  }
  deliversubscribeData(id, newsData, page) {
    const obj = newsData[page].find((data) => data.mediaId === Number(id));
    this.subscriber.subscribe(obj);
  }
  deliverUnsubscribeData(id, newsData, page) {
    const obj = newsData[page].find((data) => data.mediaId === Number(id));
    this.subscriber.unsubscribe(obj);
  }
}
