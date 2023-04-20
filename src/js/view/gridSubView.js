import { REFERENCE, NS_SECTION_INFO, VIEW_STATE } from '../constant/dom.js';
import { isEquivalent } from '../utils/objectUtils.js';

export default class GridSubView {
  _gridPress;
  _pressName;
  _noSubPopupWrap;
  constructor(curViewStateModel) {
    this._curViewStateModel = curViewStateModel;
    this._curViewStateModel.subscribe(this.render.bind(this));
    this._state = {
      gridOrList: VIEW_STATE.GRID,
      allOrSub: VIEW_STATE.SUB,
      index: 1,
    };
  }

  render(selectedState) {
    if (!isEquivalent(this._state, selectedState)) return;
    const gridSubSection = this.getMarkUp(this._curViewStateModel.getGridSubData());
    const parentElem = REFERENCE.NS_CONTAINER.querySelector('.newssection_view');
    parentElem.innerHTML = '';
    parentElem.insertAdjacentHTML('afterbegin', gridSubSection);
    this.setEvent();
  }

  getMarkUp(data) {
    const emptyData = Array.from({ length: NS_SECTION_INFO.GRID_ALL.PAGE_SIZE - data.length });

    return (
      data.reduce((acc, cur) => {
        acc += `<div class="grid_items">
        <a class="grid_press"> <img class="press_logo" src="${cur.logoImgSrc}" alt="${cur.pressName}"/> </a>
        <a class="nosub_popup_wrap hidden"><img class="nosub_button" src="/src/asset/newsSectionGridNoSubButton.svg"></a>
      </div>`;
        return acc;
      }, `<div class="newssection_view_grid">`) +
      emptyData.reduce((acc, cur) => {
        acc += `<div class="grid_items empty"></div>`;
        return acc;
      }, ``) +
      `</div>`
    );
  }

  setSelectedGridSection(gridContainer) {
    this._gridPress = gridContainer.querySelector('.grid_press');
    this._pressName = this._gridPress.querySelector('.press_logo').alt;
    this._subPopupWrap = gridContainer.querySelector('.sub_popup_wrap');
    this._noSubPopupWrap = gridContainer.querySelector('.nosub_popup_wrap');
  }

  gridSectionMouseOverEventHandler({ target }) {
    const gridContainer = target.closest('.grid_items');
    if (!gridContainer || target.classList.contains('empty')) return;

    this.setSelectedGridSection(gridContainer);
    this._gridPress.classList.add('hidden');
    this._noSubPopupWrap.classList.remove('hidden');
  }

  gridSectionMouseOutEventHandler({ target }) {
    const gridContainer = target.closest('.grid_items');
    if (!gridContainer || target.classList.contains('empty')) return;
    this._gridPress.classList.remove('hidden');
    this._noSubPopupWrap.classList.add('hidden');
  }

  gridSectionClickEventHandler({ target }) {
    if (!target.classList.contains('nosub_button')) return;
    this._curViewStateModel.deleteSubData(this._pressName);
  }

  setEvent() {
    const parentElem = REFERENCE.NS_CONTAINER.querySelector('.newssection_view_grid');
    parentElem.addEventListener('mouseover', this.gridSectionMouseOverEventHandler.bind(this));
    parentElem.addEventListener('mouseout', this.gridSectionMouseOutEventHandler.bind(this));
    parentElem.addEventListener('click', this.gridSectionClickEventHandler.bind(this));
  }
}
