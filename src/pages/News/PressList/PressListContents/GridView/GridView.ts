import { add, addStyle, addShadow, getProperty, createWrap } from '@utils/dom';
import style from './GridViewStyle';
import { PressType } from '@store/section/sectionType';

interface GridView {
  icon?: string | null;
}

class GridView extends HTMLElement {
  wrap: HTMLElement | null = null;

  connectedCallback() {
    addShadow({ target: this });
    this.wrap = createWrap();
    this.wrap.classList.add('grid-view');
    this.shadowRoot?.append(this.wrap);
    this.render();

    addStyle({
      target: this.shadowRoot,
      style: style(),
    });
  }

  render() {
    const pressListStr = getProperty({
      target: this,
      name: 'press-list',
    });
    const pressList = pressListStr ? JSON.parse(pressListStr) : [];

    const template =
      pressList.length > 0
        ? `
    <div class="press-container">
    ${pressList
      .map(
        (press: PressType, i: number) =>
          `<grid-view-item-element id='${press.pid}' image='${press.newMainLogo}' index='${i}'></grid-view-item-element>`
      )
      .join('')}
    </div>
    `
        : `
    <div class="press-container no-press">
      <div class="empty">
        <h3 class="typo-title-md">구독할 언론사가 없습니다.</h3>
        <p class="typo-body-sm">언론사 구독 설정에서 관심있는 언론사를 구독하시면</p>
        <p class="typo-body-sm">언론사가 직접 편집한 뉴스들을 네이버 홈에서 바로 보실 수 있습니다.</p>
      </div>
    </div>
    `;

    add({
      target: this.wrap,
      template,
    });
  }
}

export default GridView;
