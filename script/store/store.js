export class store {
  constructor() {
    this.changeListeners = [];
  }
  subscribe(newsData) {
    this.changeListeners.push(newsData);
  }
  unsubscribe(newsData) {
    this.changeListeners = this.changeListeners.filter((listener) => listener !== newsData);
  }
  publish() {
    return this.changeListeners;
  }
}
