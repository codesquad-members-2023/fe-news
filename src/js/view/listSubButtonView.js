import { REFERENCE, VIEW_STATE } from '../constant/dom.js';
import { isEquivalent } from '../utils/objectUtils.js';

export default class ListSubButtonView {
  _buttonContainer;
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
    const parentElem = REFERENCE.NS_CONTAINER.querySelector('.newssection_button_container');
    if (this._curViewStateModel.isEmptySubData()) {
      parentElem.innerHTML = '';
      return;
    }

    const markup = this.getMarkup();
    parentElem.innerHTML = '';
    parentElem.insertAdjacentHTML('afterbegin', markup);
    this._buttonContainer = parentElem.querySelector('.newssection_slide_buttons');
    this.setEvent();
  }

  getMarkup() {
    return `<div class="newssection_slide_buttons">
    <button class="slide_button_left" data-id="button_left">
      <img src="/src/asset/newsSectionLeftButton.svg" alt="newsSectionLeftButton" />
    </button>
    <button class="slide_button_right" data-id="button_right">
      <img src="/src/asset/newsSectionRightButton.svg" alt="newsSectionRightButton" />
    </button>
    </div>`;
  }

  slideButtonHandler({ target }) {
    if (target.closest('[data-id="button_left"]')) {
      this._curViewStateModel.decreaseIndexOnListSubView();
    }

    if (target.closest('[data-id="button_right"]')) {
      this._curViewStateModel.increaseIndexOnListSubView();
    }
  }

  setEvent() {
    this._buttonContainer.addEventListener('click', this.slideButtonHandler.bind(this));
  }
}
