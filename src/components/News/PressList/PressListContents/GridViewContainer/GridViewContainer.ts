import { add, addStyle, addShadow, getProperty, setProperty } from '@utils/dom';
import style from './GridViewContainerStyle';
import { MAX_ITEM_NUM } from '@constant/index';
import { sliceByPage } from '@utils/common';
import { StroeType } from '@utils/redux';
import { DisplayType } from '@store/display/displayType';
import store from '@store/index';

interface GridViewContainer {
  icon?: string | null;
}

class GridViewContainer extends HTMLElement {
  wrap: HTMLElement | null = null;
  displayStore: StroeType<DisplayType>;

  constructor() {
    super();
    this.displayStore = store.display;
  }

  connectedCallback() {
    addShadow({ target: this });

    const pressListStr = getProperty({ target: this, name: 'press-list' });
    const pressList = pressListStr ? JSON.parse(pressListStr) : [];
    const maxPage = Math.ceil(pressList.length / MAX_ITEM_NUM);
    const slicedPressList = Array.from({ length: maxPage }).map(
      (v: any, i: number) =>
        sliceByPage({
          page: i,
          maxItemNum: MAX_ITEM_NUM,
          items: pressList,
        })
    );

    this.render(slicedPressList);
    addStyle({
      target: this.shadowRoot,
      style: style(),
    });

    this.displayStore.subscribe(() => {
      this.changePage();
    });
  }

  changePage() {
    const currentTab = this.displayStore.getState().currentTab;
    const currentPage =
      this.displayStore.getState().page.grid[currentTab].currentPage;
    this.shadowRoot
      ?.querySelectorAll('grid-view-element')
      .forEach((gridViewElement: any, i: number) => {
        setProperty({
          target: gridViewElement,
          name: 'show',
          value: i === currentPage ? 'true' : 'false',
        });
      });
  }

  render(pressList: any) {
    const template = `
    <div class="wrap">
      ${
        pressList.length > 0
          ? `${pressList
              .map(
                (press: any, i: number) =>
                  `<grid-view-element press-list='${JSON.stringify(
                    press
                  )}' show="${i === 0 ? 'true' : 'false'}"></grid-view-element>`
              )
              .join('')}`
          : `
        <div class="press-container no-press">
          <div class="empty">
            <h3 class="typo-title-md">구독할 언론사가 없습니다.</h3>
            <p class="typo-body-sm">언론사 구독 설정에서 관심있는 언론사를 구독하시면</p>
            <p class="typo-body-sm">언론사가 직접 편집한 뉴스들을 네이버 홈에서 바로 보실 수 있습니다.</p>
          </div>
        </div>`
      }
    </div>`;
    add({
      target: this.shadowRoot,
      template,
    });
  }
}

export default GridViewContainer;
