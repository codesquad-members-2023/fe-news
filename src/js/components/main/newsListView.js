import createEl from '../../utils/util.js';
import { PRESS_BUTTON } from '../../core/constants.js';
import { ViewTypeStore } from '../../stores/viewTypeStore.js';
import { SubscribeStore } from '../../stores/subscribeListStore.js';
import { PageStore } from '../../stores/pressPageStore.js';
import { autoAnimationInfo } from '../../core/constants.js';
import { SubscribedPressPageStore } from '../../stores/subscribePressPageStore.js';

class ListView {
  #viewStore;
  #subscribeStore;
  #subscribedPressPageStore;
  #pageStore;
  listContainer;
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
  }

  setTemplate() {
    this.listContainer = createEl('div', 'list-container');
    this.listContainer.classList.add('hidden');
    this.listContainer.insertAdjacentHTML('afterbegin', this.getCategory());
    this.listContainer.insertAdjacentHTML(
      'beforeend',
      this.getPressBox.bind(this)(),
    );
    this.listContainer.addEventListener('click', ({ target }) => {
      this.moveToPage(target);
      this.clickCategory(target);
      this.clickSubscribeBtn(target);
    });
  }

  render() {
    this.setTemplate();
    this.autoMovePages();
    this.#pageStore.subscribe(this.#reRender.bind(this));
    return this.listContainer;
  }

  #reRender() {
    const { press, view } = this.#viewStore.getState();
    const { subscribedList } = this.#subscribeStore.getState();
    if (press['all'] && view['list']) {
      this.listContainer.classList.remove('hidden');
      this.listContainer.querySelector('.category-area').outerHTML =
        this.getCategory();
      this.listContainer.querySelector('.content-area').outerHTML =
        this.getPressBox.bind(this)();
    }
    if (press['all'] && view['grid'])
      this.listContainer.classList.add('hidden');
    if (press['subscribed'] && view['list']) {
      this.rafState = false;
      if (!subscribedList.size) {
        this.listContainer.classList.add('hidden');
      } else {
        this.listContainer.classList.remove('hidden');
        this.listContainer.querySelector('.category-area').outerHTML =
          this.getSubscribedCategory();
        this.listContainer.querySelector('.content-area').outerHTML =
          this.getSubscribedPress.bind(this)();
      }
    }
    if (press['subscribed'] && view['grid'])
      this.listContainer.classList.add('hidden');
  }

  getCategory({ page } = this.#pageStore.getState()) {
    const categories = page.pressMap.keys();
    const pressMap = page.pressMap.values();
    return `<div class="category-area">
      <ul class="list-category">
        ${[...categories].reduce((list, category, index) => {
          const isCurrent = page.categoryIndex === index;
          list += `<li${
            isCurrent ? ' class="current"' : ``
          }><span href="#">${category}</span>${
            isCurrent
              ? `<div><span>${page.pageIndex + 1}</span>
          <span>/${[...pressMap][page.categoryIndex].length}</span></div>`
              : ``
          }</li>`;
          return list;
        }, ``)}
      </ul>
    </div>`;
  }

  getPressBox() {
    const { page } = this.#pageStore.getState();
    const pressMap = page.pressMap.values();
    const press = [...pressMap][page.categoryIndex][page.pageIndex];
    const isSubscribe = this.#subscribeStore
      .getState()
      .subscribedList.has(press.pressLogo);
    const buttonType = isSubscribe ? 'unsubscribe' : 'subscribe';

    return `<div class="content-area">
    <div class="press-box">
      <a>
        <img src="${press.pressLogo}">
      </a>
      <span>${press.editedDate}</span>
      <button type="button" class="${buttonType} press-button">
        <img src="/src/assets/icons/${buttonType}.svg">
        <span>${PRESS_BUTTON[buttonType]}</span>
      </button>
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
        <p class="notice-msg">${
          press.press
        } 언론사에서 직접 편집한 뉴스입니다.</p>
      </div>
    </div>
    <a class='prev-button'></a>
    <a class='next-button'></a>`;
  }

  getSubscribedCategory() {
    this.#subscribedPressPageStore.dispatch({ type: 'GET_SUBSCRIBED_PRESS' });
    const { subscribedPressInfo, pressIndex } =
      this.#subscribedPressPageStore.getState();
    return `<div class="category-area">
    <ul class="list-category">
    ${subscribedPressInfo.reduce((template, press, index) => {
      const isCurrent = pressIndex === index;
      template += `<li${isCurrent ? ' class="current-subscribed"' : ``}>${isCurrent? `<span>${press.press}</span>` : `${press.press}`}${isCurrent? '<img src="/src/assets/icons/nextCategory.svg">' : ``}</li>`;
      return template;
    }, ``)}
    </ul>
    </div>`;
  }

  //getPress()랑 중복. 중복제거필요해보임
  getSubscribedPress() {
    const { subscribedPressInfo, pressIndex } =
      this.#subscribedPressPageStore.getState();
    const subscribedPress = subscribedPressInfo[pressIndex];
    return `<div class="content-area">
    <div class="press-box">
      <a src="" class="">
        <img src="${subscribedPress.pressLogo}">
      </a>
      <span>${subscribedPress.editedDate}</span>
      <button type="button" class="close press-button">
        <img src="/src/assets/icons/unsubscribe.svg">
      </button>
    </div>
    <div class="news-box">
      <div class="main-news">
        <a class="main-thumbnail">
          <img src="${subscribedPress.main.thumbnail}">
        </a>
        <div class="main-title">${subscribedPress.main.title}</div>
      </div>
      <div class="sub-news">
        <ul class="list-news">
          ${subscribedPress.sub.newsLists.reduce((list, subNews) => {
            list += `<li>${subNews}</li>`;
            return list;
          }, ``)}
        </ul>
        <p class="notice-msg">${
          subscribedPress.press
        } 언론사에서 직접 편집한 뉴스입니다.</p>
      </div>
    </div>
    <a class='prev-button'></a>
    <a class='next-button'></a>`;
  }

  moveToPage(target) {
    const isContentArea = target.closest('.content-area');
    const isPrevBtn = target.classList.contains('prev-button');
    const isNextBtn = target.classList.contains('next-button');
    if (!isContentArea || !(isPrevBtn || isNextBtn)) return;

    if (isPrevBtn) this.#pageStore.dispatch({ type: 'CLICK_PREV' });
    if (isNextBtn) this.#pageStore.dispatch({ type: 'CLICK_NEXT' });
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
    const unsubscribeBtn = target.closest('.unsubscribe');
    const closeBtn = target.closest('.close');
    if(!subscribeBtn && !unsubscribeBtn && !closeBtn) return;
    const subscribedPressInfo = target.closest('.press-box').querySelector('img').src;
    const isSubscribe =
      subscribeBtn ? 'SUBSCRIBE' : 'UNSUBSCRIBE';

    this.#subscribeStore.subscribe(this.#reRender.bind(this));
  //   subscribeBtn.outerHTML = `<button type="button" class="${buttonType} press-button">
  //   <img src="/src/assets/icons/${buttonType}.svg">
  //   <span>${PRESS_BUTTON[buttonType]}</span>
  // </button>`;
    this.#subscribeStore.dispatch({
      type: `${isSubscribe}`,
      payload: subscribedPressInfo,
    });
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
}

export default ListView;
