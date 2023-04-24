import { NS_SECTION_INFO, REFERENCE, VIEW_STATE } from '../constant/dom.js';
import { isEquivalent } from '../utils/objectUtils.js';

export default class gridAllButtonView {
  _buttonContainer;
  constructor(curViewStateModel) {
    this._curViewStateModel = curViewStateModel;
    this._curViewStateModel.subscribe(this.render.bind(this));
    this._state = {
      gridOrList: VIEW_STATE.GRID,
      allOrSub: VIEW_STATE.ALL,
    };
  }

  render(selectedState) {
    if (!isEquivalent(this._state, selectedState)) return;
    const markup = this.getMarkup();
    const parentElem = REFERENCE.NS_CONTAINER.querySelector('.newssection_button_container');
    parentElem.innerHTML = '';
    parentElem.insertAdjacentHTML('afterbegin', markup);
    this._buttonContainer = parentElem.querySelector('.newssection_slide_buttons');
    this.setEvent();
    this.showOrHiddenSlideButton();
  }

  getMarkup() {
    return `<div class="newssection_slide_buttons">
    <button class="slide_button_left hidden">
      <img src="/src/asset/newsSectionLeftButton.svg" alt="newsSectionLeftButton" />
    </button>
    <button class="slide_button_right">
      <img src="/src/asset/newsSectionRightButton.svg" alt="newsSectionRightButton" />
    </button>
    </div>`;
  }

  slideButtonHandler({ target }) {
    if (target.closest('.slide_button_left')) {
      this._curViewStateModel.decreaseIndexOnGridView();
    }

    if (target.closest('.slide_button_right')) {
      this._curViewStateModel.increaseIndexOnGridView();
    }
  }

  showOrHiddenSlideButton() {
    const { MIN_PAGE_INDEX, MAX_PAGE_INDEX } = NS_SECTION_INFO.GRID_ALL;
    const { index } = this._curViewStateModel.getCurViewState();
    const leftGridMoveButton = this._buttonContainer.querySelector('.slide_button_left');
    const rightGridMoveButton = this._buttonContainer.querySelector('.slide_button_right');

    index > MIN_PAGE_INDEX
      ? leftGridMoveButton.classList.remove('hidden')
      : leftGridMoveButton.classList.add('hidden');

    index < MAX_PAGE_INDEX
      ? rightGridMoveButton.classList.remove('hidden')
      : rightGridMoveButton.classList.add('hidden');
  }

  setEvent() {
    this._buttonContainer.addEventListener('click', this.slideButtonHandler.bind(this));
  }
}
