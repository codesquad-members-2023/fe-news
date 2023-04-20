import createEl from "../../utils/util.js";
import { CONSTANTS } from '../../core/constants.js';
import { ViewTypeStore } from "../../stores/viewTypeStore.js";
import { PageStore } from "../../stores/pressPageStore.js";

class SortButton {
  #viewTypeStore;
  #pageStore;
  constructor() {
    this.#viewTypeStore = ViewTypeStore;
    this.#pageStore = PageStore;
    this.sortButtons = createEl('div', 'sort-buttons');
  }

  render() {
    const { press, view } = this.#viewTypeStore.getState();
    const pressType = Object.keys(press);
    const viewType = Object.keys(view);

    const template = `
      <div class="press-buttons">
        ${pressType.reduce((template, cur) => {
          const isActive = press[cur] ? 'class="active"' : ``;
          template += `<a ${isActive}>${CONSTANTS[cur]}</a>`;
          return template;
        }, ``)}
      </div>
      <div class="view-buttons">
        ${viewType.reduce((template, cur) => {
          const isActive = view[cur] ? '-active' : ``;
          template += `<a class="${cur}${isActive}"></a>`;
          return template;
        }, ``)}
      </div>
      `;

    this.sortButtons.innerHTML = template;
    this.clickPress();
    this.clickView();
    return this.sortButtons;
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
        const isAll = currentTarget.textContent === CONSTANTS['all'];
        const clickTargetName = isAll? 'all' : 'subscribed';
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
        const clickTargetName = isGrid? 'grid' : 'list';
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
}

export default SortButton;