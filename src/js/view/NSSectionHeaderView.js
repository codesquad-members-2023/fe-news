//NS SECTION의 header와 이벤트 핸들러 등록
import { REFERENCE, VIEW_STATE } from '../constant/dom.js';

export default class NSSectionHeaderView {
  constructor(sectionHeaderModel, buttonView, sectionCurStateModel) {
    this._sectionHeaderModel = sectionHeaderModel;
    this._curViewStateModel = sectionCurStateModel;
    this._buttonView = buttonView;
    this._sectionHeaderModel.subscribe(this.render.bind(this));
  }

  render() {
    const markup = this.getMarkup();
    const sibling = REFERENCE.NS_CONTAINER.querySelector('.newsstand_headline_container');
    sibling.insertAdjacentHTML('afterend', markup);
    this._buttonView.changeReadyState();
    this.setEvent();
  }

  viewButtonHandler({ target }) {
    const targetButton = target.closest(
      '.all_press_show_button, .subscribe_press_show_button, .view_list_button, .view_grid_button'
    );
    if (!targetButton) return;

    const { gridOrList, allOrSub } = this._curViewStateModel.getCurViewState();
    const selectedState = {
      gridOrList: gridOrList,
      allOrSub: allOrSub,
    };
    switch (targetButton.className) {
      case 'all_press_show_button':
        selectedState.allOrSub = VIEW_STATE.ALL;
        break;
      case 'subscribe_press_show_button':
        selectedState.allOrSub = VIEW_STATE.SUB;
        break;
      case 'view_list_button':
        selectedState.gridOrList = VIEW_STATE.LIST;
        break;
      case 'view_grid_button':
        selectedState.gridOrList = VIEW_STATE.GRID;
        break;
      default:
        break;
    }

    this._curViewStateModel.changeState(selectedState);
  }

  setEvent() {
    const viewButtonContainer = REFERENCE.NS_CONTAINER.querySelector(
      '.newsstand_newssection_header'
    );
    viewButtonContainer.addEventListener('click', this.viewButtonHandler.bind(this));
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
          <img src="/src/asset/newsSectionListViewButton.svg" alt="listViewButton" />
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
