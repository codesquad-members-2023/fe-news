import { Component } from "../../core/Component.js";

export class Header extends Component {
  setUp() {
    const date = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    };
    const formattedDate = date.toLocaleString("ko-KR", options);
    this._state = { date: formattedDate };
  }

  templete() {
    const { date } = this._state;
    return `
      <div class="header-logo">
        <img src="src/images/newsstand_logo.svg" alt="" />
        <div class="header-title">뉴스 스탠드</div>
      </div>
      <div class="header-date">${date}</div>
    `;
  }
}
