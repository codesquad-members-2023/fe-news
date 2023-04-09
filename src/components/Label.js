import Component from "../core/Component.js";

export default class Label extends Component {
  setup() {
    this.state = {
      nowTime: new Date(),
    };
  }

  template() {
    return `
    <div class="news-stand__label">
        <img
            src="assets/icons/newspaper.svg"
            alt="newspaper icon"
            class="news-stand__icon"
        />
        <span>뉴스 스탠드</span>
    </div>
    <span>${this.state.nowTime}</span>
    `;
  }
}
