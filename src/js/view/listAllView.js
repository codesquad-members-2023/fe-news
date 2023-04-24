import { REFERENCE, VIEW_STATE } from '../constant/dom.js';
import { isEquivalent } from '../utils/objectUtils.js';

export default class ListAllView {
  _subButton;
  _noSubButton;

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
    const data = this._curViewStateModel.getPressData();
    const listAllCategory = this._curViewStateModel.getAllCategory();
    const listAllSection = this.getMarkUp(data, listAllCategory);
    const parentElem = REFERENCE.NS_CONTAINER.querySelector('.newssection_view');
    parentElem.innerHTML = '';
    parentElem.insertAdjacentHTML('afterbegin', listAllSection);

    const [index, curListCategory, curListCategoryLength] =
      this._curViewStateModel.getCurIndexAndCategory();
    this.setCategoryState(index, curListCategory, curListCategoryLength);
    this.setEvent();
  }

  getMarkUp(data, listAllCategory) {
    return (
      `<div class="newssection_view_list">` +
      listAllCategory.reduce((acc, cur) => {
        acc += `<div class="list_header_category" data-id="category"><span data-value="category_name">${cur}</span></div>`;
        return acc;
      }, `<div class="list_header">`) +
      `</div>
    <div class="list_view">
      <div class="list_view_top">
        <img class="press_logo" src="${data.logoImgSrc}" alt="${data.pressName}"/>
        <div class="updatetime">${data.updateTime}</div>
        <a class="subbutton" data-id="subbutton"-><img src="/src/asset/newsSectionListSubButton.svg" alt="subButton"/></a>
        <a class="nosubbutton hidden" data=id="nosubbutton><img src="/src/asset/newsSectionListNoSubButton.svg" alt="noSubButton"/></a>
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

  setCategoryState(index, curListCategory, curListCategoryLength) {
    const categorySection = REFERENCE.NS_CONTAINER.querySelectorAll('[data-id="category"]');

    [...categorySection].some((category) => {
      const categoryName = category.querySelector('[data-value="category_name"]').textContent;
      if (categoryName === curListCategory) {
        category.innerHTML += `<span>${index}/${curListCategoryLength}</span>`;
        category.classList.add('show');
        return true;
      }
    });
  }

  subOrNoSubButtonClickHandler() {}

  categoryButtonClickHandler({ target }) {
    const categorySection = target.closest('[data-id="category"]');
    if (!categorySection) return;

    const spanElement = categorySection.querySelector('[data-value="category_name"]');
    const selectedCategory = spanElement.textContent;

    this._curViewStateModel.changeListCategory(selectedCategory);
  }

  setEvent() {
    const subOrNoSubButtonContainer = REFERENCE.NS_CONTAINER.querySelector('.list_view_top');
    const categoryButtonContainer = REFERENCE.NS_CONTAINER.querySelector('.list_header');

    subOrNoSubButtonContainer.addEventListener(
      'click',
      this.subOrNoSubButtonClickHandler.bind(this)
    );

    categoryButtonContainer.addEventListener('click', this.categoryButtonClickHandler.bind(this));
  }
}
