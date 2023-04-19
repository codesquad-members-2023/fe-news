import { REFERENCE, NS_SECTION_INFO } from '../constant/dom.js';

export default class GridSubView {
  constructor(model) {
    this._model = model;
    this._model.subscribe(this.render.bind(this));
  }

  render() {
    const gridSubSection = this.getMarkUp(this._model.getData());
    const parentElem = REFERENCE.NS_CONTAINER.querySelector('.newssection_view');
    parentElem.innerHTML = '';
    parentElem.insertAdjacentHTML('afterbegin', gridSubSection);
  }

  getMarkUp(data) {
    const emptyData = Array.from({ length: NS_SECTION_INFO.GRID_ALL.PAGE_SIZE - data.length });

    return (
      data.reduce((acc, cur) => {
        acc += `<div class="grid_items">
        <a class="grid_press"> <img class="press_logo" src="${cur.logoImgSrc}" alt="${cur.pressName}"/> </a>
        <div class="popup_wrap"></div>
      </div>`;
        return acc;
      }, `<div class="newssection_view_grid">`) +
      emptyData.reduce((acc, cur) => {
        acc += `<div class="grid_items"></div>`;
        return acc;
      }, ``) +
      `</div>`
    );
  }
}
