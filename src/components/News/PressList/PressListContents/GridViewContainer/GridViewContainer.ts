import {
  add,
  addStyle,
  addShadow,
  getProperty,
  createWrap,
  setProperty,
} from '@utils/dom';
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
    const currentTab = this.displayStore.getState().currentTab;
    const maxPage =
      this.displayStore.getState().page.grid[currentTab].totalPage;
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
      console.log('display Changed');
      this.changePage();
    });
  }

  changePage() {
    console.log('changePage');
    const currentTab = this.displayStore.getState().currentTab;
    const currentPage =
      this.displayStore.getState().page.grid[currentTab].currentPage;
    console.log(currentPage);
    this.shadowRoot
      ?.querySelectorAll('grid-view-element')
      .forEach((gridViewElement: any, i: number) => {
        console.log(gridViewElement);
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
    ${pressList
      .map(
        (press: any, i: number) =>
          `<grid-view-element press-list='${JSON.stringify(press)}' show="${
            i === 0 ? 'true' : 'false'
          }"></grid-view-element>`
      )
      .join('')}
    </div>`;
    add({
      target: this.shadowRoot,
      template,
    });
  }
}

export default GridViewContainer;
