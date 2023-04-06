import Header from './components/header.js';

export default class App {
  constructor($targetEle) {
    this.$targetEle = $targetEle;

    this.initRender();
  }

  initRender() {
    new Header(this.$targetEle).initRender();
  }
}
