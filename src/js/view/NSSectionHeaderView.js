//NS SECTION의 header와 이벤트 핸들러 등록
import { REFERENCE } from '../constant/dom.js';

export default class NSSectionHeaderView {
  constructor(model, buttonView) {
    this._model = model;
    this._buttonView = buttonView;
    this._model.subscribe(this.render.bind(this));
  }

  render() {
    const markup = this.getMarkup();
    const sibling = REFERENCE.NS_CONTAINER.querySelector('.newsstand_headline_container');
    sibling.insertAdjacentHTML('afterend', markup);
    this._buttonView.changeReadyState();
  }

  getMarkup() {
    return `<div class="newsstand_newssection">
    <div class="newsstand_newssection_header">
      <div class="header_sort_buttons">
        <a class="all_press_show_button">전체 언론사</a>
        <a class="subscribe_press_show_button">내가 구독한 언론사</a>
      </div>
      <div class="header_view_buttons">
        <a class="view_list_button">
          <img src="/src/asset/newsSectionListViewButton.svg " alt="listViewButton" />
        </a>
        <a class="view_grid_button">
          <img src="/src/asset/newsSectionGridViewButton.svg" alt="gridViewButton" />
        </a>
      </div>
    </div>
    <div class="newssection_view"></div>
    </div>`;
  }
}
