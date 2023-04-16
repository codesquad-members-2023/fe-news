import createEl from "../../../utils/util.js";
import { CONSTANTS } from '../../../core/constants.js';
import { ViewStore } from "../../../stores/viewStore.js";

class SortButton {
  #viewStore;
  constructor() {
    this.#viewStore = ViewStore;
    this.sortButtons = createEl('div', 'sort-buttons');
  }

  render({ press, view } = this.#viewStore.getState()) {
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
          const state = this.#viewStore.getState();
          this.render({
            ...state,
            press: this.#viewStore.getState().press,
          });
        }

        this.#viewStore.subscribe(reRender);
        const isAll = currentTarget.textContent === CONSTANTS['all'];
        const clickTargetName = isAll? 'all' : 'subscribed';
        this.#viewStore.dispatch({
          type: 'CHANGE_PRESS',
          payload: clickTargetName,
        });
      });
    })
  }

  clickView() {
    const viewType = this.sortButtons.querySelectorAll('.view-buttons > a');
    viewType.forEach(pressButton => {
      pressButton.addEventListener('click', ({ currentTarget }) => {
        const reRender = () => {
          const state = this.#viewStore.getState();
          this.render({
            ...state,
            press: this.#viewStore.getState().press,
          });
        }

        this.#viewStore.subscribe(reRender);
        const isGrid = currentTarget.className.includes('grid');
        const clickTargetName = isGrid? 'grid' : 'list';
        this.#viewStore.dispatch({
          type: 'CHANGE_VIEW',
          payload: clickTargetName,
        });
      })
    })
  }
}

export default SortButton;