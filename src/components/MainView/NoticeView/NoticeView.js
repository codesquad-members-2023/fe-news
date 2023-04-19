import { Component } from "../../../core/Component.js";

export class NoticeView extends Component {
  template() {
    return `
      <div class="notice-view">
        <p class="notice-view__title">구독한 언론사가 없습니다</p>
        <p class="notice-view__article">언론사 구독 설정에서 관심있는 언론사를 구독하시면</p>
        <p class="notice-view__article">언론사가 직접 편집한 뉴스들을 네이버 홈에서 바로 보실 수 있습니다.</p>
        <a class="redirect-grid-view-button" href="">언론사 구독 설정하기</a>
      </div>
    `;
  }
}
