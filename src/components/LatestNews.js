import Component from "../core/Component.js";
import LatestNewsBar from "./LatestNewsBar.js";

export default class LatestNews extends Component {
  setup() {
    this.state = {
      headNewses: [],
      breakNewses: [],
    };
  }

  async componentDidMount() {
    try {
      const [headerResult, breakResult] = await Promise.all([
        fetch("http://localhost:3001/head"),
        fetch("http://localhost:3001/break"),
      ]);
      const [headerData, breakData] = await Promise.all([
        headerResult.json(),
        breakResult.json(),
      ]);

      if (!headerResult.ok || !breakResult.ok)
        throw new Error("Failed to fetch data");

      this.setState({
        headNewses: headerData,
        breakNewses: breakData,
      });
    } catch (e) {
      console.log(e);
    }
  }

  template() {
    return `
    <div class="latest-news__bar"></div>
    <div class="latest-news__bar"></div>
  `;
  }

  renderChildComponents() {
    const latestNewsBars =
      this.parentElement.querySelectorAll(".latest-news__bar");
    const { headNewses, breakNewses } = this.state;
    new LatestNewsBar(latestNewsBars[0], { newses: headNewses });
    new LatestNewsBar(latestNewsBars[1], { newses: breakNewses });
  }
}
