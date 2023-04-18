import createEl from '../../utils/util.js';
import { CATEGORY, PRESS_BUTTON } from '../../core/constants.js';
import { ViewStore } from '../../stores/viewStore.js';
import { SubscribeStore } from '../../stores/subscribeStore.js';
import { PageStore } from '../../stores/pageStore.js';

class ListView {
  #viewStore;
  #subscribeStore;
  #pageStore;
  listContainer;
  constructor(pressData) {
    this.#viewStore = ViewStore;
    this.#subscribeStore = SubscribeStore;
    this.#pageStore = PageStore;
    this.#pageStore.dispatch({
      type: 'GET_PRESSDATA',
      payload: pressData,
    });
  }

  setTemplate() {
    this.listContainer = createEl('div', 'list-container');
    this.listContainer.classList.add('hidden');
    this.listContainer.insertAdjacentHTML('afterbegin', this.getCategory());
    this.listContainer.insertAdjacentHTML('beforeend', this.getPressBox.bind(this)());
    this.listContainer.addEventListener('click', ({ target }) => {
      this.moveToPage({ target });
      this.clickCategory({ target });
    });
  }

  render() {
    this.setTemplate();
    this.#viewStore.subscribe(this.#reRender.bind(this));
    this.#pageStore.subscribe(this.#reRender.bind(this));
    return this.listContainer;
  }

  #reRender() {
    const { press, view } = this.#viewStore.getState();
    if(press['all'] && view['list']) {
      this.listContainer.classList.remove('hidden');
      this.listContainer.querySelector('.category-area').outerHTML = this.getCategory();
      this.listContainer.querySelector('.content-area').outerHTML = this.getPressBox.bind(this)();
    }
    if(press['all'] && view['grid']) this.listContainer.classList.add('hidden');
    // if(press['subscribed'] && view['list'])
    // if(press['subscribed'] && view['grid'])
    // this.onPressBox();
  }

  getCategory({ page } = this.#pageStore.getState()) {
    return `<div class="category-area">
      <ul class="list-category">
        ${page.pressData.reduce((list, category, index) => {
          const isCurrentCategory = page.categoryIndex === index;
          list += `<li${isCurrentCategory? ' class="current"' : ``}>${CATEGORY[category[0]]}</li$>`;
          return list;
        }, ``)}
      </ul>
    </div>`;
  }

  getPressBox({ page } = this.#pageStore.getState()) {
    const press = page.pressData[page.categoryIndex][1][page.pageIndex];
    const isSubscribe = this.#subscribeStore.getState().subscribedList.has(press.pressLogo.src);
    const buttonType = isSubscribe ? 'unsubscribe' : 'subscribe';
    return `<div class="content-area">
    <div class="press-box">
      <a src="" class="">
        <img src="${press.pressLogo}">
      </a>
      <span>${press.editedDate}</span>
      <button type="button" class="${buttonType} press-button">
        <img src="/src/assets/icons/subscribe.svg">
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
        <p class="notice-msg">${press.press} 언론사에서 직접 편집한 뉴스입니다.</p>
      </div>
    </div>
    <a class='prev-button'></a>
    <a class='next-button'></a>`;
  }

  moveToPage({ target }) {
    const isPrevBtn = target.className === 'prev-button';
    const isNextBtn = target.className === 'next-button';
    if(target.parentElement.className !== 'content-area' || !(isPrevBtn || isNextBtn)) return;
    if(isPrevBtn) this.#pageStore.dispatch({ type: 'CLICK_PREV' });
    if(isNextBtn) this.#pageStore.dispatch({ type: 'CLICK_NEXT' });
  }

  clickCategory({ target }) {
    
  }
}

export default ListView;