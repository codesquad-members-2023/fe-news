import { REFERENCE } from '../constant/dom.js';

export default class GridSubView {
  constructor(model) {
    this._model = model;
    this._model.subscribe(this.render.bind(this));
  }

  async render() {
    const gridAllSection = this.getMarkUp(await this._model.getData());
    const parentElem = REFERENCE.NS_CONTAINER.querySelector('.newssection_view');
    parentElem.innerHTML = '';
    parentElem.insertAdjacentHTML('afterbegin', gridAllSection);
  }

  getMarkUp(data) {
    return (
      data.reduce((acc, cur) => {
        acc += `<div class="grid_items">
        <a class="grid_press"> <img class="press_logo" src="${cur}"/> </a>
        <div class="popup_wrap"></div>
      </div>`;
        return acc;
      }, `<div class="newssection_view_grid">`) + `</div>`
    );
  }
}
