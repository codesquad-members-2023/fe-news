import Component from "../core/Component.js";

export default class LatestNewsBar extends Component {
  // 매직넘버 다 빼기
  setup() {
    this.state = {
      idx: 0,
    };
  }

  setEvent() {
    this.addEvent("transitionend", ".latest-news__container", () => {
      const prevIdx = this.state.idx;
      this.setState({
        idx: (prevIdx + 1) % 5,
      });
    });
  }

  componentDidMount() {
    setTimeout(() => {
      const container = this.parentElement.querySelector(
        ".latest-news__container"
      );

      container.classList.add("slide");
    }, 3000);
  }

  componentDidUpdate() {
    setTimeout(() => {
      const container = this.parentElement.querySelector(
        ".latest-news__container"
      );

      container.classList.add("slide");
    }, 3000);
  }

  template() {
    const { idx } = this.state;
    const { newses } = this.props;

    return `
    <div class="latest-news__window">
        <div class="latest-news__container">
            ${newses.length ? `<div>${newses[idx].title}</div>` : ""}
            ${newses.length ? `<div>${newses[(idx + 1) % 5].title}</div>` : ""}
        </div>
    </div>
  `;
  }
}
