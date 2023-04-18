export class store {
  constructor() {
    this.changeListeners = [];
  }
  subscribe(newsData) {
    this.changeListeners.push(newsData);
    console.log(this.changeListeners);
  }
  unsubscribe(newsData) {
    this.changeListeners = this.changeListeners.filter((listener) => listener !== newsData);
  }
  publish() {
    return this.changeListeners;
  }
}
