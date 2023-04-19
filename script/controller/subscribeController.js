import { NewsStore } from "../store/NewsStore.js";

export class SubscribeController {
  constructor() {
    this.newsStore = new NewsStore();
  }
  appendSubscribeData(id, newsData) {
    const foundObject = newsData.find((data) => data.mediaId === Number(id));
    this.newsStore.subscribe(foundObject);
  }
  appendUnsubscribeData(id, newsData) {
    const foundObject = newsData.find((data) => data.mediaId === Number(id));
    this.newsStore.unsubscribe(foundObject);
  }
  showPublishData() {
    return this.newsStore.publish();
  }
}
