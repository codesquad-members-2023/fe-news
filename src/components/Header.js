import { Component } from "../core/Component.js";

export class Header extends Component {
  setUp() {
    let date = new Date();
    this._state = { date: [date.toLocaleDateString()] };
  }

  templete() {
    const { date } = this._state;
    return `
      <img src="src/images/newsstand_logo.svg" alt="" />
      <div class="header-title">뉴스 스탠드</div>
      <div class="header-date">${date}</div>
    `;
  }
}
