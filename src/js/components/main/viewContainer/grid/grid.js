import createEl from '../../../../utils/util.js';
import subscribeButton from '../../buttons/subscribeButton.js';
import { ViewStore } from '../../../../stores/viewStore.js';
import { SubscribeStore } from '../../../../stores/subscribeStore.js';

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
    }
    this.#viewStore.subscribe(reRender);

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
          template += `<div><img src=${press.pressLogo}></div>`;
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
    const LAST_PAGE_SUBSCRIBE = Math.floor(subscribedPress.size / this.GRID_COUNT);

    return `<div class="grid-container${isGrid ? ``: " hidden"}">
      <div class="grid-area">
        ${[...subscribedPress, ...restGridCells].reduce((template, press) => {
          const pressLogo = press === '' ? `` : `src="${press.pressLogo}"`;
          template += `<div><img ${pressLogo}></div>`;
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
    `
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

  // Grid cell hover event -> 구독하기/해지하기
  // onMouseenterGridCell() {

  // }

  // 구독 클릭시 구독하고, 해지버튼으로 바꾸기
  // clickSubscribeBtn() {

  // }
}

export default GridView;