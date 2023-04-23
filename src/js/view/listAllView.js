import { REFERENCE, VIEW_STATE } from '../constant/dom.js';
import { isEquivalent } from '../utils/objectUtils.js';

export default class ListAllView {
  constructor(curViewStateModel) {
    this._curViewStateModel = curViewStateModel;
    this._curViewStateModel.subscribe(this.render.bind(this));
    this._state = {
      gridOrList: VIEW_STATE.LIST,
      allOrSub: VIEW_STATE.ALL,
    };
  }

  render(selectedState) {
    if (!isEquivalent(this._state, selectedState)) return;
    const listAllSection = this.getMarkUp(
      this._curViewStateModel.getAllPressData(),
      this._curViewStateModel.getAllCategory()
    );
    const parentElem = REFERENCE.NS_CONTAINER.querySelector('.newssection_view');
    parentElem.innerHTML = '';
    parentElem.insertAdjacentHTML('afterbegin', listAllSection);
  }

  getMarkUp(data, category) {
    return (
      `<div class="newssection_view_list">` +
      category.reduce((acc, cur) => {
        acc += `<div>${cur}</div>`;
        return acc;
      }, `<div class="list_header">`) +
      `</div>
    <div class="list_view">
      <div class="list_view_top">
        <img class="press_logo" src="${data.logoImgSrc}" alt="${data.pressName}"/>
        <div class="updatetime">${data.updateTime}</div>
        <a class="subbutton"><img src="/src/asset/newsSectionListSubButton.svg" alt="subButton"/></a>
        <a class="nosubbutton"><img src="/src/asset/newsSectionListNoSubButton.svg" alt="noSubButton"/></a>
      </div>
      <div class="list_view_bottom">
        <div class="bottom_main">
          <img class="main_news_img" src="${data.mainNewsImg}" alt="mainNewsImg"/>
          <div class="main_news_text">${data.mainNews}</div>
        </div>
        <div class="bottom_sub">` +
      data.subNewsList.reduce((acc, cur) => {
        acc += `<li>${cur}</li>`;
        return acc;
      }, `<ul class="sub_list">`) +
      `</ul>
        <div class="sub_instruction">${data.noticeMessage}</div>
      </div>
    </div>
  </div>
</div>`
    );
  }
}
