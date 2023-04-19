import createEl from '../../utils/util.js';
import { PRESS_BUTTON } from '../../core/constants.js';
import { ViewStore } from '../../stores/viewStore.js';
import { SubscribeStore } from '../../stores/subscribeStore.js';
import { PageStore } from '../../stores/pressPageStore.js';
import { autoAnimationInfo } from '../../core/constants.js';

class ListView {
  #viewStore;
  #subscribeStore;
  #pageStore;
  listContainer;
  movePages;
  constructor(pressData) {
    this.DELAY_TIME = autoAnimationInfo.pageDelayTime;
    this.#viewStore = ViewStore;
    this.#subscribeStore = SubscribeStore;
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
      this.moveToPage({ target });
      this.clickCategory({ target });
    });
  }

  render() {
    this.setTemplate();
    this.autoMovePages();
    this.#viewStore.subscribe(this.#reRender.bind(this));
    this.#pageStore.subscribe(this.#reRender.bind(this));
    return this.listContainer;
  }

  #reRender() {
    const { press, view } = this.#viewStore.getState();
    if (press['all'] && view['list']) {
      this.listContainer.classList.remove('hidden');
      this.listContainer.querySelector('.category-area').outerHTML =
        this.getCategory();
      this.listContainer.querySelector('.content-area').outerHTML =
        this.getPressBox.bind(this)();
    }
    if (press['all'] && view['grid']) this.listContainer.classList.add('hidden');
    // if(press['subscribed'] && view['list']) {
    //   // this.listContainer.classList.remove('hidden');
    //   this.listContainer.querySelector('.category-area').outerHTML = this.getSubscribedCategory();
    //   this.listContainer.querySelector('.content-area').outerHTML =
    //   this.getPressBox.bind(this)();
    // }
    // if(press['subscribed'] && view['grid']) {
    // }
  }

  getCategory({ page } = this.#pageStore.getState()) {
    return `<div class="category-area">
      <ul class="list-category">
        ${[...page.pressData].reduce((list, category, index) => {
          const isCurrentCategory = page.categoryIndex === index;
          list += `<li${isCurrentCategory ? ' class="current"' : ``}><span href="#">${category[0]}</span>${isCurrentCategory? `<div><span>${page.pageIndex + 1}</span>
          <span>/${[...page.pressData][page.categoryIndex][1].length}</span></div>` : ``}</li>`;
          return list;
        }, ``)}
      </ul>
    </div>`;
  }

  getPressBox({ page } = this.#pageStore.getState()) {
    const press = [...page.pressData.values()][page.categoryIndex][page.pageIndex];
    const isSubscribe = this.#subscribeStore
      .getState()
      .subscribedList.has(press.pressLogo.src);
    const buttonType = isSubscribe ? 'unsubscribe' : 'subscribe';

    return `<div class="content-area">
    <div class="press-box">
      <a src="" class="">
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

  moveToPage({ target }) {
    const isContentArea = target.closest('.content-area');
    const isPrevBtn = target.className === 'prev-button';
    const isNextBtn = target.className === 'next-button';
    if (!isContentArea || !(isPrevBtn || isNextBtn)) return;

    if (isPrevBtn) this.#pageStore.dispatch({ type: 'CLICK_PREV' });
    if (isNextBtn) this.#pageStore.dispatch({ type: 'CLICK_NEXT' });
  }

  clickCategory({ target }, { page }= this.#pageStore.getState()) {
    const isCategory = target.closest('.list-category');
    const isLI = target.closest('li');
    if(!isCategory || !isLI) return;
    const isCurrent = target.closest('li').className === 'current';
    if(isCurrent) return;

    const categories = page.pressData.keys();
    const targetCategory = target.textContent;
    const targetCategoryIndex = [...categories].indexOf(targetCategory);
    this.#pageStore.dispatch({
      type: 'CLICK_CATEGORY',
      payload: targetCategoryIndex,
    });
  }

  // getSubscribedCategory({ subscribedList } = this.#subscribeStore.getState()) {
  //   const page = this.#pageStore.getState();
  //   return `<div class="category-area">
  //   <ul class="list-category subscribed">
  //   ${[...subscribedList].reduce((template, pressLogoUrl) => {
  //     const isCurrentCategory = true;
  //     template += `<li${isCurrentCategory ? ' class="current"' : ``}>${pressLogoUrl}</li>`
  //     return template;
  //   }, ``)}
  //   </ul>
  //   </div>`;
  // }

  autoMovePages() {
    let lastTime = 0;
    this.movePages = currentTime => {
      let deltaTime = currentTime - lastTime;
      if (deltaTime > this.DELAY_TIME) {
        this.#pageStore.dispatch({ type: 'CLICK_NEXT' });
        lastTime = currentTime;
      }
      if (this.rafState) requestAnimationFrame(this.movePages);
    }
    requestAnimationFrame(this.movePages);
  }
}

export default ListView;
