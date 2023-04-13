import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import style from './ListViewItemStyle';

interface ListViewItem {
  icon?: string | null;
}

class ListViewItem extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const press =
      getProperty({
        target: this,
        name: 'press',
      }) ?? '';

    const image =
      getProperty({
        target: this,
        name: 'image',
      }) ?? '';

    const template = `
    <div class="header">
      <img ${
        press ? `src="src/assets/images/press-logo/${press}.png"` : ''
      } height="20px" width="auto">
      <p class="typo-body-xs">2023.02.10. 18:53 편집</p>
      <button-element icon="plus">구독하기</button-element>
    </div>
    <div class="contents">
      <div class="headliner">
        <button class="image" ${
          image
            ? `style="background-image: url(src/assets/images/headlines/${image}.png)"`
            : ''
        }></button>
        <div class="title typo-body-md"><a href="/">봇물처럼 터지는 공공요금 인상…꼭 지금이어야 하나</a></div>
      </div>
      <div class="articles-container">
        <ul>
        ${[...Array(6)]
          .map(
            () =>
              `<li class="typo-body-md"><a href="/">[단독] 美복권 키오스크 "불법"인데…정부 방치에 '우후죽순'</a></li>`
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
      style: style(),
    });
  }
}

export default ListViewItem;
