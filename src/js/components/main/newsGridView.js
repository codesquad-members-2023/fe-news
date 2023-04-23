import createEl from '../../utils/util.js';
import { ViewTypeStore } from '../../stores/viewTypeStore.js';
import { SubscribeStore } from '../../stores/subscribeListStore.js';
import { PRESS_BUTTON } from '../../core/constants.js';
import { createBtn } from './subscribeBtn.js';

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
    this.viewContainer = createEl('div', 'view-container');
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

  renderAllGridView({ view } = this.#viewStore.getState()) {
    const isGrid = view['grid'];
    const pressInfo = this.#gridData.slice(
      this.GRID_COUNT * this.page,
      this.GRID_COUNT * (this.page + 1),
    );
    return `<div class="grid-container${isGrid ? `` : ' hidden'}">
      <div class="grid-area">
        ${pressInfo.reduce((template, press) => {
          template += `<div class="grid-cell"><img src=${press.pressLogo} alt=${press.press}></div>`;
          return template;
        }, ``)}
      </div>
      <a class='prev-button' style="visibility:${
        this.page === this.FIRST_PAGE ? 'hidden' : 'visible'
      }"></a>
      <a class='next-button' style="visibility:${
        this.page === this.LAST_PAGE ? 'hidden' : 'visible'
      }"></a>
      </div>`;
  }

  moveToGridPage({ target }) {
    if (this.isMovable(target)) return;
    const isPrevBtn = target.classList.contains('prev-button');
    const isNextBtn = target.classList.contains('next-button');
    if (!(isPrevBtn || isNextBtn)) return;
    if (isPrevBtn && this.page > this.FIRST_PAGE) this.page--;
    if (isNextBtn && this.page < this.LAST_PAGE) this.page++;
    this.viewContainer.querySelector('.grid-container').outerHTML = this.renderAllGridView();
    this.onMouseGridCell();
  }

  isMovable(target) {
    const isTargetInGridContainer =
      target.parentElement.classList.contains('grid-container');
    if (!isTargetInGridContainer) return true;
  }

  onMouseGridCell() {
    const gridCells = this.viewContainer.querySelectorAll('.grid-cell');
    gridCells.forEach((cell) => {
      cell.addEventListener('mouseenter', this.mouseEnterGridCell.bind(this));
      cell.addEventListener('mouseleave', this.mouseLeaveGridCell.bind(this));
    });
  }

  mouseEnterGridCell({ currentTarget }) {
    const pressLogo = currentTarget.querySelector('img');
    if(this.checkValidGridCell(pressLogo)) return;

    this.insertGridCellBtn.bind(this)(currentTarget, pressLogo);
    currentTarget.querySelector('.press-button').addEventListener('click', this.clickPressBtn.bind(this));
  }

  checkValidGridCell(pressLogo) {
    if(pressLogo.src === '') return true;
    else pressLogo.classList.add('hidden');
  }

  insertGridCellBtn(currentTarget, pressLogo) {
    const gridCellBtn = currentTarget.querySelector('.cell-button');
    if(!gridCellBtn) {
      const isSubscribe = this.#subscribeStore.getState()
        .subscribedList.has(pressLogo.src);
      const buttonType = isSubscribe ? 'unsubscribe' : 'subscribe';

      currentTarget.insertAdjacentHTML(
        'beforeend',
        this.getCellBtn(`${buttonType}`),
      );
    } else gridCellBtn.classList.remove('hidden');
  }

  getCellBtn(buttonType) {
    return `<div class="cell-button">${createBtn(buttonType)}</div>`;
  }

  clickPressBtn({ currentTarget }) {
    const targetBtnText = currentTarget.querySelector('span').textContent;
    const isSubscribe = targetBtnText === PRESS_BUTTON['subscribe'] ? 'SUBSCRIBE' : 'UNSUBSCRIBE';
    const subscribedPressInfo = currentTarget
      .closest('.grid-cell')
      .querySelector('img').src;

    this.#subscribeStore.dispatch({
      type: `${isSubscribe}`,
      payload: subscribedPressInfo,
    });
  }

  mouseLeaveGridCell({ target }) {
    const pressLogo = target.querySelector('img');
    pressLogo.classList.remove('hidden');
    target.querySelector('.cell-button')?.classList.add('hidden');
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
      }
    }
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
          const pressInfo = press === '' ? `` : `src="${press}"`;
          template += `<div class="grid-cell"><img ${pressInfo}></div>`;
          return template;
        }, ``)}
      </div>
      <a class='prev-button' style="visibility:${
        this.page === this.FIRST_PAGE ? 'hidden' : 'visible'
      }"></a>
      <a class='next-button' style="visibility:${
        this.page === LAST_PAGE_SUBSCRIBE ? 'hidden' : 'visible'
      }"></a></div>`;
    }

  getViewContainer() {
    return this.viewContainer;
  }
}

export default GridView;
