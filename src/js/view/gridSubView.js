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
    };
  }

  render(selectedState) {
    if (!isEquivalent(this._state, selectedState)) return;
    const parentElem = REFERENCE.NS_CONTAINER.querySelector('.newssection_view');

    const gridSubSection = this._curViewStateModel.isEmptySubData()
      ? this.getEmptySubDataMarkup()
      : this.getMarkUp(this._curViewStateModel.getGridSubData());

    parentElem.innerHTML = '';
    parentElem.insertAdjacentHTML('afterbegin', gridSubSection);

    this._curViewStateModel.isEmptySubData() ? null : this.setEvent();
  }

  getEmptySubDataMarkup() {
    return `<div class="newssection_view_empty">
            <div class="view_empty_header"><span>구독한 언론사가 없습니다.</span></div>
            <div class="view_empty_description"><span>언론사 구독 설정에서 관심있는 언론사를 구독하시면</span></div>
            <div class="view_empty_description"><span>언론사가 직접 편집한 뉴스들을 네이버 홈에서 바로 보실 수 있습니다.</span></div>
            <button class="view_empty_subscribe_button">언론사 구독 설정하기</button>     
    </div>`;
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
