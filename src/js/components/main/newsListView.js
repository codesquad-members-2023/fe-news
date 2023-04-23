import createEl from '../../utils/util.js';
import { ViewTypeStore } from '../../stores/viewTypeStore.js';
import { SubscribeStore } from '../../stores/subscribeListStore.js';
import { PageStore } from '../../stores/pressPageStore.js';
import { autoAnimationInfo } from '../../core/constants.js';
import { SubscribedPressPageStore } from '../../stores/subscribePressPageStore.js';
import { createBtn } from './subscribeBtn.js';

class ListView {
  #viewStore;
  #subscribeStore;
  #subscribedPressPageStore;
  #pageStore;
  movePages;
  constructor(pressData) {
    this.DELAY_TIME = autoAnimationInfo.pageDelayTime;
    this.#viewStore = ViewTypeStore;
    this.#subscribeStore = SubscribeStore;
    this.#subscribedPressPageStore = SubscribedPressPageStore;
    this.#pageStore = PageStore;
    this.#pageStore.dispatch({
      type: 'GET_PRESSDATA',
      payload: pressData,
    });
    this.rafState = true;
    this.listContainer = createEl('div', 'list-container');
  }

  init() {
    this.setTemplate();
    this.autoMovePages();
    this.#pageStore.subscribe(this.#reRender.bind(this));
    this.#subscribeStore.subscribe(this.#reRender.bind(this)); //버튼만 리렌더하는 방법으로 변경필요
    return this;
  }

  setTemplate({ page } = this.#pageStore.getState()) {
    this.listContainer.classList.add('hidden');
    this.listContainer.insertAdjacentHTML('afterbegin', this.getCategory.bind(this)(page));
    this.listContainer.insertAdjacentHTML('beforeend', this.getPressBox.bind(this)(page));
    this.listContainer.addEventListener('click', ({ target }) => {
      this.moveToPage(target);
      this.clickCategory(target);
      this.clickSubscribeBtn(target);
      this.clickSubscribedPress(target);
    });
  }

  getCategory(page) {
    const categories = page.pressMap.keys();
    const pressMap = page.pressMap.values();
    const categoryIndex = page.categoryIndex;
    return `<div class="category-area">
      <ul class="list-category">
      ${[...categories].reduce((list, category, index) => {
        const isCurrent = categoryIndex === index;
        list += `<li${isCurrent ? ` class="current"><span>${category}</span><div><span>${page.pageIndex + 1}</span><span>/${[...pressMap][page.categoryIndex].length}</span></div>` : `>${category}`}</li>`;
        return list;
      }, ``)}
      </ul>
    </div>`;
  }

  getPressBox(page) {
    const pressMap = page.pressMap.values();
    const press = [...pressMap][page.categoryIndex][page.pageIndex];
    const isSubscribe = this.#subscribeStore.getState()
      .subscribedList.has(press.pressLogo);
    const buttonType = isSubscribe ? 'unsubscribe' : 'subscribe';
    return this.pressBoxTemplate(press, buttonType);
  }

  pressBoxTemplate(press, buttonType) {
    return `<div class="content-area">
    <div class="press-box">
      <a>
        <img src="${press.pressLogo}">
      </a>
      <span>${press.editedDate}</span>${createBtn(buttonType)}
    </div>
    <div class="news-box">
      <div class="main-news">
        <a class="main-thumbnail">
          <img src="${press.main.thumbnail}">
        </a>
        <div class="main-title">${press.main.title}</div>
      </div>
      <div class="sub-news">
        <ul class="list-news">
          ${press.sub.newsLists.reduce((list, subNews) => {
            list += `<li>${subNews}</li>`;
            return list;
          }, ``)}
        </ul>
        <p class="notice-msg">${press.press} 언론사에서 직접 편집한 뉴스입니다.</p>
      </div>
    </div>
    <a class='prev-button'></a>
    <a class='next-button'></a>`;
  }

  moveToPage(target) {
    const isPrevBtn = target.classList.contains('prev-button');
    const isNextBtn = target.classList.contains('next-button');
    if (!(isPrevBtn || isNextBtn)) return;

    const isSubscribedPress = target.closest('.list-container').querySelector('.list-category-subscribed')
    if(!isSubscribedPress) {
      isPrevBtn ? this.#pageStore.dispatch({ type: 'CLICK_PREV' }) : this.#pageStore.dispatch({ type: 'CLICK_NEXT' });
    } else {
      isPrevBtn ? this.#subscribedPressPageStore.dispatch({ type: 'PREV_PRESS' }) : this.#subscribedPressPageStore.dispatch({ type: 'NEXT_PRESS' });
      this.excuteRerender('PRESS_SUBSCRIBE_LIST_VIEW');
    }
  }

  clickCategory(target, { page } = this.#pageStore.getState()) {
    if (this.isValidClickCategory(target)) return;
    const categories = page.pressMap.keys();
    const targetCategory = target.textContent;
    const targetCategoryIndex = [...categories].indexOf(targetCategory);
    this.#pageStore.dispatch({
      type: 'CLICK_CATEGORY',
      payload: targetCategoryIndex,
    });
  }

  isValidClickCategory(target) {
    const isCategory = target.closest('.list-category');
    const isLI = target.closest('li');
    if (!isCategory || !isLI) return true;
    const isCurrent = isLI.classList.contains('current');
    if (isCurrent) return true;
  }

  clickSubscribeBtn(target) {
    const subscribeBtn = target.closest('.subscribe');
    if (this.isValidTargetBtn.bind(this)(target)) return;
    const isSubscribe = subscribeBtn ? 'SUBSCRIBE' : 'UNSUBSCRIBE';
    const subscribedPressInfo = target.closest('.press-box').querySelector('img').src;
    // 버튼만 리렌더하게 변경
    this.#subscribeStore.dispatch({
      type: `${isSubscribe}`,
      payload: subscribedPressInfo,
    });
    if(!subscribeBtn) {
      this.#subscribedPressPageStore.dispatch({
      type: 'REMOVE_PRESS',
      payload: subscribedPressInfo,
    });
    }
  }

  isValidTargetBtn(target) {
    const subscribeBtn = target.closest('.subscribe');
    const unsubscribeBtn = target.closest('.unsubscribe');
    const closeBtn = target.closest('.close');
    if(!subscribeBtn && !unsubscribeBtn && !closeBtn) return true;
  }

  clickSubscribedPress(target) {
    const subscribeList = target.closest('.list-category-subscribed');
    const current = target.closest('.current-subscribed');
    if(!subscribeList || current) return;
    const targetPress = target.textContent;
    this.#subscribedPressPageStore.dispatch({
      type: 'CLICK_PRESS',
      payload: targetPress,
    });
    this.excuteRerender('PRESS_SUBSCRIBE_LIST_VIEW');
  }

  autoMovePages() {
    let lastTime = 0;
    this.movePages = (currentTime) => {
      let deltaTime = currentTime - lastTime;
      if (deltaTime > this.DELAY_TIME) {
        this.#pageStore.dispatch({ type: 'CLICK_NEXT' });
        lastTime = currentTime;
      }
      if (this.rafState) requestAnimationFrame(this.movePages);
    };
    requestAnimationFrame(this.movePages);
  }

  #reRender() {
    const { press, view } = this.#viewStore.getState();
    if (press['all'] && view['grid']) this.excuteRerender('PRESS_ALL_GRID_VIEW');
    else if (press['all'] && view['list']) this.excuteRerender('PRESS_ALL_LIST_VIEW');
    else if (press['subscribe'] && view['grid']) this.excuteRerender('PRESS_SUBSCRIBE_GRID_VIEW');
    else if (press['subscribe'] && view['list']) this.excuteRerender('PRESS_SUBSCRIBE_LIST_VIEW');
  }

  excuteRerender(type) {
    const { subscribedList } = this.#subscribeStore.getState();
    const { page } = this.#pageStore.getState();
    const listContainerClass = this.listContainer.classList;
    const categoryArea = this.listContainer.querySelector('.category-area');
    const contentArea = this.listContainer.querySelector('.content-area');
    const viewType = {
      PRESS_ALL_GRID_VIEW() {
        listContainerClass.add('hidden');
      },
      PRESS_ALL_LIST_VIEW() {
        listContainerClass.remove('hidden');
        categoryArea.outerHTML = this.getCategory.bind(this)(page);
        contentArea.outerHTML = this.getPressBox.bind(this)(page);
      },
      PRESS_SUBSCRIBE_GRID_VIEW() {
        listContainerClass.add('hidden');
      },
      PRESS_SUBSCRIBE_LIST_VIEW() {
        this.rafState = false;
        this.#subscribedPressPageStore.dispatch({ type: 'GET_SUBSCRIBED_PRESS' });
        if (!subscribedList.size) {
          listContainerClass.add('hidden');
        } else {
          listContainerClass.remove('hidden');
          categoryArea.outerHTML = this.getSubscribedCategory();
          contentArea.outerHTML = this.getSubscribedPress.bind(this)();
        }
      }
    }
    return viewType[type].bind(this)();
  }

  getSubscribedCategory({ subscribedPressInfo, pressIndex } = this.#subscribedPressPageStore.getState()) {
    return `<div class="category-area">
    <ul class="list-category-subscribed">
    ${subscribedPressInfo.reduce((template, press, index) => {
      const isCurrent = pressIndex === index;
      template += `<li${isCurrent ? ` class="current-subscribed"><span>${press.press}</span><img src="/src/assets/icons/nextCategory.svg">` : `>${press.press}`}</li>`;
      return template;
    }, ``)}
    </ul>
    </div>`;
  }

  getSubscribedPress({ currentPress } = this.#subscribedPressPageStore.getState()) {
    const buttonType = 'close';
    return this.pressBoxTemplate(currentPress, buttonType);
  }

  getListView() {
    return this.listContainer;
  }
}

export default ListView;