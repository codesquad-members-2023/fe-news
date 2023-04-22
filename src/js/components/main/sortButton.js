import createEl from "../../utils/util.js";
import { VIEWTYPE } from '../../core/constants.js';
import { ViewTypeStore } from "../../stores/viewTypeStore.js";
import { PageStore } from "../../stores/pressPageStore.js";

class SortButton {
  #viewTypeStore;
  #pageStore;
  sortButtons;
  constructor() {
    this.#viewTypeStore = ViewTypeStore;
    this.#pageStore = PageStore;
  }

  init() {
    this.setTemplate();
    this.clickPress();
    this.clickView();
    return this;
  }

  setTemplate() {
    const { press, view } = this.#viewTypeStore.getState();
    const pressType = Object.keys(press);
    const viewType = Object.keys(view);

    this.sortButtons = createEl('div', 'sort-buttons');
    this.sortButtons.innerHTML = `<div class="press-buttons">
        ${pressType.reduce((template, cur) => {
          const isActive = press[cur] ? 'class="active"' : ``;
          template += `<a ${isActive}>${VIEWTYPE[cur]}</a>`;
          return template;
        }, ``)}
      </div>
      <div class="view-buttons">
        ${viewType.reduce((template, cur) => {
          const isActive = view[cur] ? '-active' : ``;
          template += `<a class="${cur}${isActive}"></a>`;
          return template;
        }, ``)}
      </div>`;
  }

  clickPress() {
    const pressType = this.sortButtons.querySelectorAll('.press-buttons > a');
    pressType.forEach(pressButton => {
      pressButton.addEventListener('click', ({ currentTarget }) => {
        const reRender = () => {
          const state = this.#viewTypeStore.getState();
          this.render({
            ...state,
            press: this.#viewTypeStore.getState().press,
          });
        }
        this.#viewTypeStore.subscribe(reRender);
        const isAll = currentTarget.textContent === VIEWTYPE['ALL'];
        const clickTargetName = isAll? 'ALL' : 'SUBSCRIBE';
        this.#viewTypeStore.dispatch({
          type: 'CHANGE_PRESS',
          payload: clickTargetName,
        });
        this.#pageStore.dispatch({
          type: 'RESET_PAGE',
        });
      });
    })
  }

  clickView() {
    const viewType = this.sortButtons.querySelectorAll('.view-buttons > a');
    viewType.forEach(pressButton => {
      pressButton.addEventListener('click', ({ currentTarget }) => {
        const reRender = () => {
          const state = this.#viewTypeStore.getState();
          this.render({
            ...state,
            press: this.#viewTypeStore.getState().press,
          });
        }
        this.#viewTypeStore.subscribe(reRender);
        const isGrid = currentTarget.className.includes('grid');
        const clickTargetName = isGrid? 'GRID' : 'LIST';
        this.#viewTypeStore.dispatch({
          type: 'CHANGE_VIEW',
          payload: clickTargetName,
        });
        this.#pageStore.dispatch({
          type: 'RESET_PAGE',
        });
      });
    })
  }

  getSortButtons() {
    return this.sortButtons;
  }
}

export const SortButtons = new SortButton();