import Component from "../core/Component.js";

export default class Cell extends Component {
  template() {
    const src = this.props?.src;
    return `<img class="news-list__image" ${src ? `src=${src}` : ""} />`;
  }

  setup() {
    this.addEvent("mouseenter", ".news-list__item", ({ target }) => {});
  }
}
