import Component from "../core/Component.js";

export default class NewsContent extends Component {
  template() {
    const { press, subscribingPresses } = this.props;

    const isSubscribing = subscribingPresses.some(
      (subscribingPress) => subscribingPress === press.name
    );

    if (!press) return `<span>loading...</span>`;

    return `
        <div class="press-info">
            <img src= "${press?.logo_src}"/>
            <span>${press?.edit_time}</span>
            <button>${isSubscribing ? "해지하기" : "구독하기"}</button>
        </div>
        <div class="newses">
            <div class="main-news">
                <img class="thumbnail" src="${press?.main_news_image}" />
                <span>${press?.main_news_title}</span>
            </div>
            <div>
                <ul class="sub-news">
                  ${press?.sub_news_titles.reduce(
                    (listItems, title) => listItems + `<li>${title}</li>`,
                    ""
                  )}
                </ul>
                <span class="caption">UPI뉴스 언론사에서 직접 편집한 뉴스입니다.</span>
            </div>
        </div>
    
    `;
  }
}
