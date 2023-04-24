import createElement from '../../utils/util.js';
import { ViewTypeStore } from '../../stores/viewTypeStore.js';
import { SubscribeStore } from '../../stores/subscribeListStore.js';
import { DURATION_TIME } from '../../core/constants.js';
import { createBtn, popupUnsubscribeBtn, popupSubscribeBtn } from './subscribeButton.js';

class GridView {
  #gridData;
  #viewStore;
  #subscribeStore;
  page = 0;
  constructor(gridData, { GRID_INFO }) {
    this.#gridData = gridData;
    this.#viewStore = ViewTypeStore;
    this.#subscribeStore = SubscribeStore;
    this.FIRST_PAGE = GRID_INFO.FIRST_PAGE;
    this.LAST_PAGE = GRID_INFO.LAST_PAGE;
    this.GRID_COUNT = GRID_INFO.GRID_COUNT;
    this.viewContainer = createElement('div', 'view-container');
  }

  init() {
    this.setTemplate();
    this.onMouseGridCell();
    this.#viewStore.subscribe(this.#reRender.bind(this));
    this.#subscribeStore.subscribe(this.#reRender.bind(this));
    return this;
  }

  setTemplate() {
    this.viewContainer.innerHTML = this.renderAllGridView();
    this.viewContainer.addEventListener('click', this.moveToGridPage.bind(this));
  }

  renderAllGridView() {
    const { view } = this.#viewStore.getState();
    const { subscribedList } = this.#subscribeStore.getState();
    const isGrid = view['grid'];
    const pressInfo = this.#gridData.slice(this.GRID_COUNT * this.page, this.GRID_COUNT * (this.page + 1));
    return `<div class="grid-container${isGrid ? `` : ' hidden'}">
    <div class="grid-area">
    ${pressInfo.reduce((template, press) => {
      const isSubscribe = subscribedList.has(press.pressLogo);
      const buttonType = isSubscribe ? 'unsubscribe' : 'subscribe';
      template += `<div class="grid-cell"><img src=${press.pressLogo} alt=${press.press}><div class="cell-item hidden">${createBtn(buttonType)}</div></div>`;
      return template;
    }, ``)}
      </div>
      <a class='prev-button' style="visibility:${this.page === this.FIRST_PAGE ? 'hidden' : 'visible'}"></a>
      <a class='next-button' style="visibility:${this.page === this.LAST_PAGE ? 'hidden' : 'visible'}"></a>
      </div>`;
  }

  moveToGridPage({ target }) {
    const isPrevBtn = target.classList.contains('prev-button');
    const isNextBtn = target.classList.contains('next-button');
    if (this.isMovable(target, isPrevBtn, isNextBtn)) return;

    if (isPrevBtn && this.page > this.FIRST_PAGE) this.page--;
    if (isNextBtn && this.page < this.LAST_PAGE) this.page++;
    this.viewContainer.querySelector('.grid-container').outerHTML = this.renderAllGridView();
    this.onMouseGridCell();
  }

  isMovable(target, isPrevBtn, isNextBtn) {
    const isTargetInGridContainer = target.parentElement?.classList.contains('grid-container');
    if (!isTargetInGridContainer) return true;
    if (!isPrevBtn && !isNextBtn) return true;
  }

  onMouseGridCell() {
    const gridArea = this.viewContainer.querySelector('.grid-area');
    gridArea.addEventListener('mouseover', this.mouseOverGridCell.bind(this));
    gridArea.addEventListener('mouseout', this.mouseOutGridCell.bind(this));
    gridArea.addEventListener('click', this.clickCellBtn.bind(this));
  }

  mouseOverGridCell({ target }) {
    const gridCell = target.closest('.grid-cell');
    if (!gridCell) return;
    const pressLogo = gridCell.querySelector('img');
    const cellBtn = gridCell.querySelector('.cell-item');
    if (pressLogo.src === '') return;
    pressLogo.classList.add('hidden');
    cellBtn.classList.replace('hidden', 'flex');
  }

  mouseOutGridCell({ target }) {
    const gridCell = target.closest('.grid-cell');
    if (!gridCell) return;
    const pressLogo = gridCell.querySelector('img');
    const cellBtn = gridCell.querySelector('.cell-item');
    pressLogo.classList.remove('hidden');
    cellBtn.classList.replace('flex', 'hidden');
  }

  clickCellBtn({ target }) {
    const cellBtn = target.closest('.cell-button');
    if (!cellBtn) return;
    const subscribedPressInfo = target.closest('.grid-cell').querySelector('img');
    this.clickSubscribeBtn.bind(this)(cellBtn, subscribedPressInfo);
    this.clickUnsubscribeBtn.bind(this)(cellBtn, subscribedPressInfo);
  }

  clickSubscribeBtn(cellBtn, subscribedPressInfo) {
    if (!cellBtn.classList.contains('subscribe')) return;
    cellBtn.outerHTML = createBtn('unsubscribe');
    const addPopup = document.querySelector('.popup-add');
    if (addPopup) addPopup.classList.remove('hidden');
    else this.viewContainer.insertAdjacentHTML('beforeend', popupSubscribeBtn());
    this.disappearPopup();
    this.#subscribeStore.dispatch({
      type: 'SUBSCRIBE',
      payload: subscribedPressInfo.src,
    });
  }

  clickUnsubscribeBtn(cellBtn, subscribedPressInfo) {
    if (cellBtn.classList.contains('subscribe')) return;
    if (this.viewContainer.querySelector('.popup-btn'))
    this.viewContainer.querySelector('.popup-confirm').outerHTML = popupUnsubscribeBtn(subscribedPressInfo.alt);
    else this.viewContainer.insertAdjacentHTML('beforeend', popupUnsubscribeBtn(subscribedPressInfo.alt));
    this.confirmUnsubscribe.bind(this)(cellBtn, subscribedPressInfo);
  }

  disappearPopup() {
    setTimeout(() => {
      document.querySelector('.popup-add').classList.add('hidden');
    }, DURATION_TIME.snackbar);
  }

  confirmUnsubscribe(cellBtn, subscribedPressInfo) {
    this.viewContainer.querySelector('.popup-btn').addEventListener('click', ({ target }) => {
      const confirm = target.classList.contains('confirm');
      if (confirm) {
        this.#subscribeStore.dispatch({
          type: 'UNSUBSCRIBE',
          payload: subscribedPressInfo.src,
        });
        cellBtn.outerHTML = createBtn('subscribe');
      }
      target.closest('.popup-confirm').style.display = 'none';
    });
  }

  #reRender() {
    const { press, view } = this.#viewStore.getState();
    if (press['all'] && view['grid']) this.excuteRerender('PRESS_ALL_GRID_VIEW');
    else if (press['all'] && view['list']) this.excuteRerender('PRESS_ALL_LIST_VIEW');
    else if (press['subscribe'] && view['grid']) this.excuteRerender('PRESS_SUBSCRIBE_GRID_VIEW');
    else if (press['subscribe'] && view['list']) this.excuteRerender('PRESS_SUBSCRIBE_LIST_VIEW');
    this.onMouseGridCell();
  }

  excuteRerender(type) {
    const { subscribedList } = this.#subscribeStore.getState();
    const gridContainer = this.viewContainer.querySelector('.grid-container');
    const viewType = {
      PRESS_ALL_GRID_VIEW() {
        gridContainer.outerHTML = this.renderAllGridView();
      },
      PRESS_ALL_LIST_VIEW() {
        gridContainer.classList.add('hidden');
      },
      PRESS_SUBSCRIBE_GRID_VIEW() {
        if (!subscribedList.size) gridContainer.outerHTML = this.noSubscription();
        else gridContainer.outerHTML = this.renderSubscribeGridView(subscribedList);
      },
      PRESS_SUBSCRIBE_LIST_VIEW() {
        if (!subscribedList.size) {
          gridContainer.classList.remove('hidden');
          gridContainer.outerHTML = this.noSubscription();
        } else gridContainer.classList.add('hidden');
      },
    };
    return viewType[type].bind(this)();
  }

  noSubscription() {
    return `<div class="grid-container">
    <div class="grid-area">
      <div class="no-subscription">
        <h3>구독한 언론사가 없습니다.</h3>
        <p>언론사 구독 설정에서 관심있는 언론사를 구독하시면<br>
        언론사가 직접 편집한 뉴스들을 네이버 홈에서 바로 보실 수 있습니다.</p>
      </div>
    </div>
    </div>`;
  }

  renderSubscribeGridView(subscribedList) {
    const isGrid = this.#viewStore.getState().view['grid'];
    // Todo - 24 넘으면 slice하고 나머지 채우기
    const restGridCells = Array(this.GRID_COUNT - subscribedList.size).fill('');
    const LAST_PAGE_SUBSCRIBE = Math.floor(subscribedList.size / this.GRID_COUNT);
    return `<div class="grid-container${isGrid ? `` : ' hidden'}">
      <div class="grid-area">
        ${[...subscribedList, ...restGridCells].reduce((template, press) => {
          const isSubscribe = subscribedList.has(press);
          const buttonType = isSubscribe ? 'unsubscribe' : 'subscribe';
          const pressInfo = press === '' ? `` : `src="${press}"`;
          template += `<div class="grid-cell"><img ${pressInfo}><div class="cell-item hidden">${createBtn(buttonType)}</div></div>`;
          return template;
        }, ``)}
      </div>
    <a class='prev-button' style="visibility:${this.page === this.FIRST_PAGE ? 'hidden' : 'visible'}"></a>
    <a class='next-button' style="visibility:${this.page === LAST_PAGE_SUBSCRIBE ? 'hidden' : 'visible'}"></a></div>`;
  }

  getViewContainer() {
    return this.viewContainer;
  }
}

export default GridView;
