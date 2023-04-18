export class store {
  constructor() {
    this.changeListeners = [];
  }
  subscribe(newsData) {
    this.changeListeners.push(callBackFunction);
  }
  unsubscribe(newsData) {
    this.changeListeners = this.changeListeners.filter((listener) => listener !== callBackFunction);
  }
  publish() {
    this.changeListeners.forEach((changeListener) => changeListene);
  }
}
