import Header from './components/header.js';
import MainContent from './components/mainContent/mainContent.js';

export default class App {
  constructor($targetEle) {
    this.$targetEle = $targetEle;

    this.header = new Header(this.$targetEle);
    this.mainContent = new MainContent(this.$targetEle);

    this.initRender();
  }

  initRender() {
    this.header.initRender();
    this.mainContent.initRender();
  }
}
