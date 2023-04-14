import { Component } from "../../../core/Component.js";

export class ListViewMain extends Component {
  templete() {
    const { currentCategoryData } = this.props;
    const {
      name,
      logo_src,
      edit_time,
      main_news_image,
      main_news_title,
      sub_news_titles,
    } = currentCategoryData;
    return `
      <div class="list-view-main__section-main">
      <div class="list-view-main__header">
        <img class="list-view-main__press" src="${logo_src}" alt="" />
        <div class="list-view-main__edit-time">${edit_time}</div>
        <div class="subscribe-btn">
          <div class="subscribe-text">+ 구독하기</div>
        </div>
      </div>
      <div class="list-view-main__contents">
        <img class="list-view-main__main-news-image" src="${main_news_image}" alt="" />
        <div class="list-view-main__main-news-title">${main_news_title}</div>
      </div>
    </div>
    <div class="list-view-main__section-sub">
      ${sub_news_titles.reduce(
        (acc, title) =>
          acc + `<li class="list-view-main__sub-news-title">${title}</li>`,
        ""
      )}
      <li class="list-view-main__sub-news-notice">${name} 언론사에서 직접 편집한 뉴스입니다</li>
    </div>
    `;
  }
}
