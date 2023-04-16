import createEl from '../../utils/util.js';
import { ViewStore } from '../../stores/viewStore.js';
import { SubscribeStore } from '../../stores/subscribeStore.js';
import { PRESS_BUTTON } from '../../core/constants.js';

class GridView {
  #gridData;
  #viewStore;
  #subscribeStore;
  page = 0;
  FIRST_PAGE = 0;
  LAST_PAGE = 3;
  GRID_COUNT = 24;
  constructor(gridData) {
    this.#gridData = gridData;
    this.#viewStore = ViewStore;
    this.#subscribeStore = SubscribeStore;
    this.viewContainer = createEl('div', 'view-container');
    this.moveToPage();
  }

  render() {
    this.viewContainer.innerHTML = this.activateAllPress();
    const { press, view } = this.#viewStore.getState();

    const reRender = () => {
      if(press['all']) this.viewContainer.innerHTML = this.activateAllPress();
      if(press['subscribed']) this.viewContainer.innerHTML = this.activateSubscribedPress.bind(this)();
      this.onGridCell();
    }
    this.#viewStore.subscribe(reRender);
    this.onGridCell();
    return this.viewContainer;
  }

  activateAllPress() {
    const isGrid = this.#viewStore.getState().view['grid'];
    const pressInfo = this.#gridData.slice(
      this.GRID_COUNT * this.page,
      this.GRID_COUNT * (this.page + 1),
    );

    return `<div class="grid-container${isGrid ? ``: " hidden"}">
      <div class="grid-area">
        ${pressInfo.reduce((template, press) => {
          template += `<div class="grid-cell"><img src=${press.pressLogo}></div>`;
          return template;
        }, ``)}
      </div>
      <a class='prev-button' style="visibility:${
        this.page === this.FIRST_PAGE ? 'hidden' : 'visible'}"></a>
      <a class='next-button' style="visibility:${
        this.page === this.LAST_PAGE ? 'hidden' : 'visible'}"></a>
      </div>`;
  }

  activateSubscribedPress() {
    const subscribedPress = this.#subscribeStore.getState().subscribedList;
    if(!subscribedPress.size) return this.isNoSubscription();
    else return this.getSubscribedPress(subscribedPress);
  }

  isNoSubscription() {
    return `<div class="no-subscription">
    <h3>구독한 언론사가 없습니다.</h3>
      <p>언론사 구독 설정에서 관심있는 언론사를 구독하시면<br>
      언론사가 직접 편집한 뉴스들을 네이버 홈에서 바로 보실 수 있습니다.</p>
    </div>`;
  }

  getSubscribedPress(subscribedPress) {
    const isGrid = this.#viewStore.getState().view['grid'];
    const restGridCells = Array(this.GRID_COUNT - subscribedPress.size).fill('');
    // Todo - 24 넘으면 slice하고 나머지 채우기
    const LAST_PAGE_SUBSCRIBE = Math.floor(subscribedPress.size / this.GRID_COUNT);

    return `<div class="grid-container${isGrid ? ``: " hidden"}">
      <div class="grid-area">
        ${[...subscribedPress, ...restGridCells].reduce((template, press) => {
          const pressLogo = press === '' ? `` : `src="${press}"`;
          template += `<div class="grid-cell"><img ${pressLogo}></div>`;
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
      const isPrevBtn = target.className === 'prev-button';
      const isNextBtn = target.className === 'next-button';

      if(!(isPrevBtn || isNextBtn)) return;
      if (isPrevBtn && this.page > this.FIRST_PAGE) this.page--;
      if (isNextBtn && this.page < this.LAST_PAGE) this.page++;
      this.render();
    });
  }

  onGridCell() {
    const gridCells = this.viewContainer.querySelectorAll('.grid-cell');
    gridCells.forEach(cell => {
      cell.addEventListener('mouseenter', this.mouseEnterGridCell.bind(this));
      cell.addEventListener('mouseleave', ({ target }) => {
        const pressLogo = target.querySelector('img');
        pressLogo.classList.remove('hidden');
        target.querySelector('.cell-button')?.classList.add('hidden');
      });
    })
  }

  mouseEnterGridCell({ target }) {
    const pressLogo = target.querySelector('img');
    if(pressLogo.src === '') return;
    pressLogo.classList.add('hidden');

    const subscribeBtn = target.querySelector('.cell-button');
    if(subscribeBtn) subscribeBtn.classList.remove('hidden');
    else {
      const isSubscribe = this.#subscribeStore.getState().subscribedList.has(pressLogo.src);
      const buttonType = isSubscribe ? 'unsubscribe' : 'subscribe';
      target.insertAdjacentHTML('beforeend', this.getSubscribeButton(`${buttonType}`));
    }

    target.querySelector('.cell-button').addEventListener('click', ({ target }) => {
      const subscribeBtn = target.closest('.grid-cell');
      const targetPress = subscribeBtn.querySelector('img').src;
      const reRender = () => {
        const state =  this.#subscribeStore.getState();
        this.render({
          ...state,
          subscribedList: this.#subscribeStore.getState(),
        });
      }
      this.#subscribeStore.subscribe(reRender);
      const isSubscribe = target.closest('.cell-button').querySelector('span').textContent === PRESS_BUTTON['subscribe']?
      'SUBSCRIBE' : 'UNSUBSCRIBE';
      this.#subscribeStore.dispatch({
        type: `${isSubscribe}`,
        payload: targetPress,
      });
    });
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