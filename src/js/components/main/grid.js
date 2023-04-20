import createEl from '../../utils/util.js';
import { ViewTypeStore } from '../../stores/viewTypeStore.js';
import { SubscribeStore } from '../../stores/subscribeStore.js';
import { PRESS_BUTTON } from '../../core/constants.js';

class GridView {
  #gridData;
  #viewStore;
  #subscribeStore;
  page = 0;
  viewContainer;
  constructor(gridData, { GRID_INFO }) {
    this.#gridData = gridData;
    this.#viewStore = ViewTypeStore;
    this.#subscribeStore = SubscribeStore;
    this.FIRST_PAGE = GRID_INFO.FIRST_PAGE;
    this.LAST_PAGE = GRID_INFO.LAST_PAGE;
    this.GRID_COUNT = GRID_INFO.GRID_COUNT;
  }

  setTemplate() {
    this.viewContainer = createEl('div', 'view-container');
    this.viewContainer.innerHTML = this.renderAllGridView();
    this.moveToPage();
    this.onMouseGridCell();
  }

  render() {
    this.setTemplate();
    this.#viewStore.subscribe(this.#reRender.bind(this));
    return this.viewContainer;
  }

  #reRender() {
    const { press, view } = this.#viewStore.getState();
    const { subscribedList } = this.#subscribeStore.getState();
    const gridContainer = this.viewContainer.querySelector('.grid-container');
    if (press['all'] && view['list']) gridContainer.classList.add('hidden');
    if (press['all'] && view['grid'])
      gridContainer.outerHTML = this.renderAllGridView();
    if (press['subscribed'] && view['grid']) {
      gridContainer.outerHTML = this.renderSubscribedGridView.bind(this)();
    }
    if(press['subscribed'] && view['list']) {
      if(!subscribedList.size) gridContainer.classList.remove('hidden');
      else gridContainer.classList.add('hidden');
      console.log(gridContainer);
    }
    this.onMouseGridCell();
  }

  renderAllGridView() {
    const isGrid = this.#viewStore.getState().view['grid'];
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

  renderSubscribedGridView() {
    const subscribedPress = this.#subscribeStore.getState().subscribedList;
    if (!subscribedPress.size) return this.isNoSubscription();
    else return this.getSubscribedPress(subscribedPress);
  }

  isNoSubscription() {
    const isGrid = this.#viewStore.getState().view['grid'];
    return `<div class="grid-container${isGrid ? `` : ' hidden'}">
    <div class="grid-area">
      <div class="no-subscription">
        <h3>구독한 언론사가 없습니다.</h3>
        <p>언론사 구독 설정에서 관심있는 언론사를 구독하시면<br>
        언론사가 직접 편집한 뉴스들을 네이버 홈에서 바로 보실 수 있습니다.</p>
      </div>
    </div>
    </div>`;
  }

  getSubscribedPress(subscribedPress) {
    const isGrid = this.#viewStore.getState().view['grid'];
    const restGridCells = Array(this.GRID_COUNT - subscribedPress.size).fill(
      '',
    );
    // Todo - 24 넘으면 slice하고 나머지 채우기
    const LAST_PAGE_SUBSCRIBE = Math.floor(
      subscribedPress.size / this.GRID_COUNT,
    );
    return `<div class="grid-container${isGrid ? `` : ' hidden'}">
      <div class="grid-area">
        ${[...subscribedPress, ...restGridCells].reduce((template, press) => {
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
      }"></a>
    </div>
    `;
  }

  moveToPage() {
    this.viewContainer.addEventListener('click', ({ target }) => {
      const isPrevBtn = target.classList.contains('prev-button');
      const isNextBtn = target.classList.contains('next-button');
      if (
        !target.parentElement.classList.contains('grid-container') ||
        !(isPrevBtn || isNextBtn)
      )
        return;

      if (isPrevBtn && this.page > this.FIRST_PAGE) this.page--;
      if (isNextBtn && this.page < this.LAST_PAGE) this.page++;
      this.viewContainer.querySelector('.grid-container').outerHTML =
        this.renderAllGridView();
      this.onMouseGridCell();
    });
  }

  onMouseGridCell() {
    const gridCells = this.viewContainer.querySelectorAll('.grid-cell');
    gridCells.forEach((cell) => {
      cell.addEventListener('mouseenter', this.mouseEnterGridCell.bind(this));
      cell.addEventListener('mouseleave', this.mouseLeaveGridCell.bind(this));
    });
  }

  mouseEnterGridCell({ target }) {
    const pressLogo = target.querySelector('img');
    if (pressLogo.src === '') return;

    pressLogo.classList.add('hidden');
    const subscribeBtn = target.querySelector('.cell-button');
    if (subscribeBtn) subscribeBtn.classList.remove('hidden');
    else {
      const pressLogo = target.querySelector('img');
      const isSubscribe = this.#subscribeStore
        .getState()
        .subscribedList.has(pressLogo.src);
      const buttonType = isSubscribe ? 'unsubscribe' : 'subscribe';
      target.insertAdjacentHTML(
        'beforeend',
        this.getSubscribeButton(`${buttonType}`),
      );
    }
    target
      .querySelector('.press-button')
      .addEventListener('click', this.clickSubscribeBtn.bind(this));
  }

  clickSubscribeBtn({ target }) {
    const subscribedPressInfo = target
      .closest('.grid-cell')
      .querySelector('img').src;
    const targetBtnText = target
      .closest('.press-button')
      .querySelector('span').textContent;
    const isSubscribe =
      targetBtnText === PRESS_BUTTON['subscribe'] ? 'SUBSCRIBE' : 'UNSUBSCRIBE';
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

  getSubscribeButton(buttonName) {
    return `<div class="cell-button">
      <button type="button" class="${buttonName} press-button">
        <img src="/src/assets/icons/${buttonName}.svg">
        <span>${PRESS_BUTTON[buttonName]}</span>
      </button>
    </div>`;
  }
}

export default GridView;