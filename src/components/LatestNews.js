import Component from "../core/Component.js";

export default class LatestNews extends Component {
  template() {
    const { headIdx, breakIdx, headNewses, breakNewses } = this.state;

    return `
    <div class="latest-news__bar">
    </div>
          `;
  }

  setup() {
    this.state = {
      headNewses: [],
      breakNewses: [],
      headIdx: 0,
      breakIdx: 0,
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
    } catch (e) {}
  }
}
