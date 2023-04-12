import Component from "../core/Component.js";

export default class NewsContent extends Component {
  setup() {
    const { subscribingPresses, press } = this.props;
    const isSubscribing = subscribingPresses.some(
      (subscribingPress) => subscribingPress === press.name
    );

    this.state = {
      isSubscribing,
    };
  }

  setEvent() {
    const { addSubscribing, removeSubscribing, press, subscriptionOption } =
      this.props;

    this.addEvent("click", ".list-button", () => {
      if (!press) return;
      const name = press.name;
      console.log(subscriptionOption);

      this.state.isSubscribing
        ? removeSubscribing(name, subscriptionOption !== "all")
        : addSubscribing(name, subscriptionOption !== "all");

      this.setState({
        isSubscribing: !this.state.isSubscribing,
      });
    });
  }

  template() {
    const { press } = this.props;
    const { isSubscribing } = this.state;

    if (!press) return `<span>loading...</span>`;

    const {
      logo_src,
      edit_time,
      main_news_image,
      main_news_title,
      sub_news_titles,
    } = press;

    const listHtml = sub_news_titles.reduce(
      (listString, title) => listString + `<li>${title}</li>`,
      ""
    );

    return `
        <div class="press-info">
            <img src= "${logo_src}"/>
            <span>${edit_time}</span>
            <button class="list-button">${
              isSubscribing ? "해지하기" : "구독하기"
            }</button>
        </div>
        <div class="newses">
            <div class="main-news">
                <img class="thumbnail" src="${main_news_image}" />
                <span>${main_news_title}</span>
            </div>
            <div>
                <ul class="sub-news">
                  ${listHtml}
                </ul>
                <span class="caption">UPI뉴스 언론사에서 직접 편집한 뉴스입니다.</span>
            </div>
        </div>
    
    `;
  }
}
