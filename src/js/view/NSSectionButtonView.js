import { REFERENCE } from '../constant/dom.js';

export default class NSSectionButtonView {
  constructor(model) {
    this._model = model;
    this._model.subscribe(this.render.bind(this));
  }

  render() {
    const markup = this.getMarkup();
    const parentElem = REFERENCE.NS_CONTAINER.querySelector('.newsstand_newssection');
    parentElem.insertAdjacentHTML('beforeend', markup);
    this.setEvent();
  }

  getMarkup() {
    return `<div class="newssection_slide_buttons">
    <button>
      <img src="/src/asset/newsSectionLeftButton.svg" alt="newsSectionLeftButton" />
    </button>
    <button>
      <img src="/src/asset/newsSectionRightButton.svg" alt="newsSectionRightButton" />
    </button>
    </div>`;
  }
  setEvent() {}
}
