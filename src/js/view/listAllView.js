import { REFERENCE, VIEW_STATE } from '../constant/dom.js';
import { isEquivalent } from '../utils/objectUtils.js';

export default class ListAllView {
  _categoryButtonContainer;
  _subOrNoSubButtonContainer;
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
      this._curViewStateModel.getCurIndexAndCategory(); // 객체를 넘겨주기
    this.setListSection();
    this.setCategoryState(index, curListCategory, curListCategoryLength); // 객체를 받자
    this.setStateOfSubOrNoSub();
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
        <img class="press_logo" src="${data.logoImgSrc}" alt="${data.pressName}" data-id="pressname"/>
        <div class="updatetime">${data.updateTime}</div>
        <a class="subbutton hidden" data-id="subbutton"-><img src="/src/asset/newsSectionListSubButton.svg" alt="subButton"/></a>
        <a class="nosubbutton hidden" data-id="nosubbutton"><img src="/src/asset/newsSectionListNoSubButton.svg" alt="noSubButton"/></a>
      </div>
      <div class="list_view_bottom">
        <div class="bottom_main">
          <div class="main_news_img_container">
          <img class="main_news_img" src="${data.mainNewsImg}" alt="mainNewsImg"/>
          </div>
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

  setListSection() {
    this._categoryButtonContainer = REFERENCE.NS_CONTAINER.querySelector('.list_header');
    this._subOrNoSubButtonContainer = REFERENCE.NS_CONTAINER.querySelector('.list_view_top');

    this._subButton = this._subOrNoSubButtonContainer.querySelector('[data-id="subbutton"]');
    this._noSubButton = this._subOrNoSubButtonContainer.querySelector('[data-id="nosubbutton"]');
  }

  isSubscribe(pressName) {
    return this._curViewStateModel.containsSubData(pressName);
  }

  setStateOfSubOrNoSub() {
    const pressName = this._subOrNoSubButtonContainer.querySelector('[data-id="pressname"]').alt;

    switch (this.isSubscribe(pressName)) {
      case true:
        this._noSubButton.classList.remove('hidden');
        break;
      case false:
        this._subButton.classList.remove('hidden');
        break;
      default:
        break;
    }
  }

  setCategoryState(index, curListCategory, curListCategoryLength) {
    const categorySection = this._categoryButtonContainer.querySelectorAll('[data-id="category"]');

    [...categorySection].some((category) => {
      const categoryName = category.querySelector('[data-value="category_name"]').textContent;
      if (categoryName === curListCategory) {
        category.innerHTML += `<span>${index}/${curListCategoryLength}</span>`;
        category.classList.add('show');
        return true;
      }
    });
  }

  subOrNoSubButtonClickHandler({ target }) {
    const clickedButton = target.closest('[data-id="subbutton"], [data-id="nosubbutton"]');
    if (!clickedButton) return;

    const pressName = this._subOrNoSubButtonContainer.querySelector('[data-id="pressname"]').alt;
    const article = this._curViewStateModel.getArticleByPublish(pressName);

    clickedButton.getAttribute('data-id') === 'subbutton'
      ? this.subButtonClickHandler(article)
      : this.noSubButtonClickHandler(pressName);
  }

  subButtonClickHandler(article) {
    this._curViewStateModel.setSubData(article);
    this._subButton.classList.add('hidden');
    this._noSubButton.classList.remove('hidden');
  }

  noSubButtonClickHandler(pressName) {
    this._curViewStateModel.deleteSubDataOnAllView(pressName);
    this._subButton.classList.remove('hidden');
    this._noSubButton.classList.add('hidden');
  }

  categoryButtonClickHandler({ target }) {
    const categorySection = target.closest('[data-id="category"]');
    if (!categorySection) return;

    const spanElement = categorySection.querySelector('[data-value="category_name"]');
    const selectedCategory = spanElement.textContent;

    this._curViewStateModel.changeListCategoryOnListAllView(selectedCategory);
  }

  setEvent() {
    this._subOrNoSubButtonContainer.addEventListener(
      'click',
      this.subOrNoSubButtonClickHandler.bind(this)
    );

    this._categoryButtonContainer.addEventListener(
      'click',
      this.categoryButtonClickHandler.bind(this)
    );
  }
}
