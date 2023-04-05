import { add, addStyle, addShadow } from '@utils/dom';
import ListViewItemStyle from './ListViewItemStyle';

interface GridViewItem {
  icon?: string | null;
}

class GridViewItem extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const template = `
    <div class="header">
      <span class="press-logo"></span>
      <p class="typo-body-xs">2023.02.10. 18:53 편집</p>
      <button-element icon="plus">구독하기</button-element>
    </div>
    <div class="contents">
      <div class="headliner">
        <div class="image"></div>
        <div class="title typo-body-md">봇물처럼 터지는 공공요금 인상…꼭 지금이어야 하나</div>
      </div>
      <div class="articles-container">
        <ul>
        ${[...Array(6)]
          .map(
            () =>
              `<li class="typo-body-md">[단독] 美복권 키오스크 "불법"인데…정부 방치에 '우후죽순'</li>`
          )
          .join('')}
        </ul>
        <span class="caption typo-body-sm">SBS Biz 언론사에서 직접 편집한 뉴스입니다.</span>
      </div>
    </div>
    `;
    addShadow({ target: this });
    add({
      target: this.shadowRoot,
      template,
    });
    addStyle({
      target: this.shadowRoot,
      style: new ListViewItemStyle({ target: this }).element,
    });
  }
}

export default GridViewItem;
