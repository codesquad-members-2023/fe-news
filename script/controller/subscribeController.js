import { store } from "../store/store.js";

export class SubscribeController {
  constructor() {
    this.subscriber = new store();
  }
  appendSubscribeData(id, newsData, page) {
    const foundObject = newsData[page].find((data) => data.mediaId === Number(id));
    this.subscriber.subscribe(foundObject);
  }
  appendUnsubscribeData(id, newsData, page) {
    const foundObject = newsData[page].find((data) => data.mediaId === Number(id));
    this.subscriber.unsubscribe(foundObject);
  }
  showPublishData() {
    return this.subscriber.publish();
  }
}
