import { NS_SECTION_INFO, REFERENCE, RENDER_STATE } from '../constant/dom.js';

export default class NSSectionButtonView {
  constructor(gridAllModel) {
    this._gridAllModel = gridAllModel;
    this._state = {
      render: RENDER_STATE.NOT_READY,
      view: {
        index: 1,
        gridOrList: 'grid',
      },
    };
  }

  changeReadyState() {
    this._state.render = RENDER_STATE.READY;
    this.render();
  }

  render() {
    const markup = this.getMarkup();
    const parentElem = REFERENCE.NS_CONTAINER.querySelector('.newsstand_newssection');
    parentElem.insertAdjacentHTML('beforeend', markup);
    this.setEvent(parentElem);
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

  NSSectionButtonHandler({ target, buttonContainer }) {
    const { view } = this._state;
    switch (view.gridOrList) {
      case 'grid':
        this.gridButtonHandler({ target, buttonContainer });
        break;
      case 'list':
        break;
    }
  }

  showOrHiddenGridMoveButton(buttonContainer) {
    const { MIN_PAGE_INDEX, MAX_PAGE_INDEX } = NS_SECTION_INFO.GRID_ALL;
    const { view } = this._state;
    const leftGridMoveButton = buttonContainer.querySelector('.slide_button_left');
    const rightGridMoveButton = buttonContainer.querySelector('.slide_button_right');

    if (view.index > MIN_PAGE_INDEX) {
      leftGridMoveButton.classList.remove('hidden');
    } else {
      leftGridMoveButton.classList.add('hidden');
    }

    if (view.index < MAX_PAGE_INDEX) {
      rightGridMoveButton.classList.remove('hidden');
    } else {
      rightGridMoveButton.classList.add('hidden');
    }
  }

  gridButtonHandler({ target, buttonContainer }) {
    const { MIN_PAGE_INDEX, MAX_PAGE_INDEX } = NS_SECTION_INFO.GRID_ALL;
    const { view } = this._state;

    if (target.closest('.slide_button_left')) {
      if (view.index === MIN_PAGE_INDEX) return;
      view.index -= 1;
      this._gridAllModel.decreaseIndex();
    }

    if (target.closest('.slide_button_right')) {
      if (view.index === MAX_PAGE_INDEX) return;

      view.index += 1;
      this._gridAllModel.increaseIndex();
    }
    this.showOrHiddenGridMoveButton(buttonContainer);
  }

  setEvent(parentElem) {
    const buttonContainer = parentElem.querySelector('.newssection_slide_buttons');
    buttonContainer.addEventListener('click', (e) =>
      this.NSSectionButtonHandler({ target: e.target, buttonContainer: buttonContainer })
    );
  }
}
