import HeaderDate from "./headerDate.js";
import HeaderLogo from "./hederLogo.js";
export default class NewsHeader {
  constructor() {
    this.newsHeader = document.querySelector(".root");
  }
  init() {
    this.insertNewsHeader();
  }
  insertLogo() {
    return new HeaderLogo().insertHedaerLogo();
  }
  insertDate() {
    return new HeaderDate().insertHeaderDate();
  }
  insertNewsHeader() {
    this.newsHeader.innerHTML = `<header><div class="news__header">${this.insertLogo()}${this.insertDate()}</div></header>`;
  }
}
