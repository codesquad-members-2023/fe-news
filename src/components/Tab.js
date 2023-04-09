import Component from "../core/Component.js";

export default class Tab extends Component {
  template() {
    return `
    <span class="view-option__all">전체 언론사</span>
    <span class="view-option__subscribe">내가 구독한 언론사</span>
    `;
  }
}
