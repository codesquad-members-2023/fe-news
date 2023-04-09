import Component from "../core/Component.js";

export default class Bar extends Component {
  template() {
    const { newses, index } = this.props;

    return `
    <div class="latest-news__window">
        <div class="latest-news__container">
            ${newses.length ? `<div>${newses[index].title}</div>` : ""}
            ${
              newses.length ? `<div>${newses[(index + 1) % 5].title}</div>` : ""
            }
        </div>
    </div>
  `;
  }

  setup() {
    this.state = {
      titles: [],
      index: 0,
      timerId: null,
    };
  }
}
