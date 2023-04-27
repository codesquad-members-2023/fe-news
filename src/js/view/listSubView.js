import { REFERENCE, NS_SECTION_INFO, VIEW_STATE } from '../constant/dom.js';
import { isEquivalent } from '../utils/objectUtils.js';

export default class ListSubView {
  _pressNameSectionContainer;
  _noSubButton;
  _parentElem;
  constructor(curViewStateModel) {
    this._curViewStateModel = curViewStateModel;
    this._curViewStateModel.subscribe(this.render.bind(this));
    this._state = {
      gridOrList: VIEW_STATE.LIST,
      allOrSub: VIEW_STATE.SUB,
    };
  }

  render(selectedState) {
    if (!isEquivalent(this._state, selectedState)) return;
    this._parentElem = REFERENCE.NS_CONTAINER.querySelector('.newssection_view');

    const isEmptySubData = this._curViewStateModel.isEmptySubData();

    let listSubSection;
    switch (isEmptySubData) {
      case true:
        listSubSection = this.getEmptySubDataMarkup();
        this._parentElem.innerHTML = '';
        this._parentElem.insertAdjacentHTML('afterbegin', listSubSection);
        break;
      default:
        const allSubPress = this._curViewStateModel.getAllListSubPresses();
        const curSubPress = this._curViewStateModel.getCurListSubPress();
        listSubSection = this.getMarkUp(allSubPress, curSubPress);
        this._parentElem.innerHTML = '';
        this._parentElem.insertAdjacentHTML('afterbegin', listSubSection);
        this.setListSection();
        this.setPressNameSectionState(curSubPress);
        this.setEvent();
        break;
    }
  }

  getEmptySubDataMarkup() {
    return `<div class="newssection_view_empty">
            <div class="view_empty_header"><span>구독한 언론사가 없습니다.</span></div>
            <div class="view_empty_description"><span>언론사 구독 설정에서 관심있는 언론사를 구독하시면</span></div>
            <div class="view_empty_description"><span>언론사가 직접 편집한 뉴스들을 네이버 홈에서 바로 보실 수 있습니다.</span></div>
            <button class="view_empty_subscribe_button">언론사 구독 설정하기</button>     
    </div>`;
  }

  getMarkUp(allSubPress, curSubPress) {
    return (
      `<div class="newssection_view_list">` +
      allSubPress.reduce((acc, cur) => {
        acc += `<div class="list_header_category" data-id="category"><span data-value="category_name">${cur.pressName}</span></div>`;
        return acc;
      }, `<div class="list_header" data-id="categoryContainer">`) +
      `</div>
  <div class="list_view">
    <div class="list_view_top">
      <img class="press_logo" src="${curSubPress.logoImgSrc}" alt="${curSubPress.pressName}" data-id="pressName"/>
      <div class="updatetime">${curSubPress.updateTime}</div>
      <a class="nosubbutton" data-id="noSubButton"><img src="/src/asset/newsSectionListNoSubButton.svg" alt="noSubButton"/></a>
    </div>
    <div class="list_view_bottom">
      <div class="bottom_main">
        <img class="main_news_img" src="${curSubPress.mainNewsImg}" alt="mainNewsImg"/>
        <div class="main_news_text">${curSubPress.mainNews}</div>
      </div>
      <div class="bottom_sub">` +
      curSubPress.subNewsList.reduce((acc, cur) => {
        acc += `<li>${cur}</li>`;
        return acc;
      }, `<ul class="sub_list">`) +
      `</ul>
      <div class="sub_instruction">${curSubPress.noticeMessage}</div>
    </div>
  </div>
</div>
</div>`
    );
  }

  setListSection() {
    this._pressNameSectionContainer = REFERENCE.NS_CONTAINER.querySelector(
      '[data-id="categoryContainer"]'
    );
    this._noSubButton = this._parentElem.querySelector('[data-id="noSubButton"]');
  }

  setPressNameSectionState(curSubPress) {
    const pressNameSection =
      this._pressNameSectionContainer.querySelectorAll('[data-id="category"]');
    [...pressNameSection].some((press) => {
      const pressName = press.querySelector('[data-value="category_name"]').textContent;
      if (pressName === curSubPress.pressName) {
        press.innerHTML += `<span>></span>`;
        press.classList.add('show');
        return true;
      }
    });
  }

  noSubButtonClickHandler() {
    const pressName = this._parentElem.querySelector('[data-id="pressName"]').alt;
    this._curViewStateModel.deleteSubDataOnListSubView(pressName);
  }

  pressNameSectionButtonClickHandler({ target }) {
    const pressNameSection = target.closest('[data-id="category"]');
    if (!pressNameSection) return;

    const spanElement = pressNameSection.querySelector('[data-value="category_name"]');
    const selectedPress = spanElement.textContent;
    this._curViewStateModel.changePressOnListSubView(selectedPress);
  }

  setEvent() {
    this._pressNameSectionContainer.addEventListener(
      'click',
      this.pressNameSectionButtonClickHandler.bind(this)
    );
    this._noSubButton.addEventListener('click', this.noSubButtonClickHandler.bind(this));
  }
}
