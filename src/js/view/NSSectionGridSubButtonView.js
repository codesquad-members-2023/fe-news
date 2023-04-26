import { NS_SECTION_INFO, REFERENCE, VIEW_STATE } from '../constant/dom.js';
import { isEquivalent } from '../utils/objectUtils.js';

export default class gridSubButtonView {
  _buttonContainer;
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
    const markup = this.getMarkup();
    const parentElem = REFERENCE.NS_CONTAINER.querySelector('.newssection_button_container');
    parentElem.innerHTML = '';
    parentElem.insertAdjacentHTML('afterbegin', markup);
    this._buttonContainer = parentElem.querySelector('.newssection_slide_buttons');
    this.showOrHiddenSlideButton();
    this.setEvent();
  }

  getMarkup() {
    return `<div class="newssection_slide_buttons">
    <button class="slide_button_left hidden">
      <img src="/src/asset/newsSectionLeftButton.svg" alt="newsSectionLeftButton" />
    </button>
    <button class="slide_button_right hidden">
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
    const { index } = this._curViewStateModel.getCurViewState();
    const leftGridMoveButton = this._buttonContainer.querySelector('.slide_button_left');
    const rightGridMoveButton = this._buttonContainer.querySelector('.slide_button_right');

    this._curViewStateModel.isNextSubPage()
      ? rightGridMoveButton.classList.remove('hidden')
      : rightGridMoveButton.classList.add('hidden');

    index > 1
      ? leftGridMoveButton.classList.remove('hidden')
      : leftGridMoveButton.classList.add('hidden');
  }

  setEvent() {
    this._buttonContainer.addEventListener('click', this.slideButtonHandler.bind(this));
  }
}
