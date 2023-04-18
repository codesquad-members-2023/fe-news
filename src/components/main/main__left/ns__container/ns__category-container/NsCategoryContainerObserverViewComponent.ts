import { Component, ObserverViewComponent } from '@custom-types/interfaces';
import { Article, Props, State } from '@custom-types/types';
import { AbstractView } from '@src/types/abstracts.js';
import { NsCategoryContainerObservableModel } from '@components/main/main__left/ns__container/ns__category-container/NsCategoryContainerObservableModel.js';
import { NsCategoryNavbarObserverViewComponent } from '@components/main/main__left/ns__container/ns__category-container/ns__category-navbar/NsCategoryNavbarObserverViewComponent.js';
import { NsArticleContainerObserverViewComponent } from '@components/main/main__left/ns__container/ns__category-container/ns__article-container/NsArticleContainerObserverViewComponent.js';
import { $ } from '@utils/dom.js';
import { CATEGORY_CONTAINER_PAGE_START } from '@src/constants/constants.js';

export class NsCategoryContainerObserverViewComponent
  extends AbstractView
  implements ObserverViewComponent
{
  _observerModel: NsCategoryContainerObservableModel;

  nsCategoryNavbar: NsCategoryNavbarObserverViewComponent;
  nsArticleContainer: NsArticleContainerObserverViewComponent;
  constructor(props?: Props) {
    super();
    this._observerModel = new NsCategoryContainerObservableModel();

    const page = 0;

    this.nsCategoryNavbar = new NsCategoryNavbarObserverViewComponent({
      ...props,
      page,
    });
    this.nsArticleContainer = new NsArticleContainerObserverViewComponent({
      ...props,
      page,
    });
    this.nsCategoryNavbar.attachTo(this);
    this.nsArticleContainer.attachTo(this);
    this.setState({ ...props, page });
    this.addButtonEvent(this.state);
  }

  // setTemplate은 subscriber 처리하면 안된다. 그러면 element가 초기화되어버림.
  setTemplate() {
    this._templateElement.innerHTML = `<section id="category-container" class="p-3 h-full flex flex-col justify-start relative">
                                         <button id="btn-prev" class="absolute left-0 top-1/2 border rounded-full bg-white drop-shadow-very-xl">
                                           <img src="/public/images/symbols/chevron-left.svg" alt="chevron-left" class="h-6 w-6"/>
                                         </button>                                     
                                         <button id="btn-next" class="absolute right-0 top-1/2 border rounded-full bg-white drop-shadow-very-xl">
                                           <img src="/public/images/symbols/chevron-right.svg" alt="chevron-right" class="h-6 w-6"/>
                                         </button>
                                       </section>`;
  }

  get state() {
    return this._observerModel.state;
  }

  private setState(state: State) {
    this.subscribe();
    this._observerModel.setState(state);
  }

  attachTo(component: Component, position: InsertPosition = 'beforeend') {
    component.element.insertAdjacentElement(position, this.element);
  }

  subscribe() {
    this._observerModel.addSubscriber(this.addCategoryList.bind(this));
    this._observerModel.addSubscriber(this.addArticleHeader.bind(this));
    this._observerModel.addSubscriber(this.addMainArticle.bind(this));
    this._observerModel.addSubscriber(this.addSubArticles.bind(this));
    this._observerModel.addSubscriber(this.toggleGridButton.bind(this));
  }

  // 아래는 subscriber이 될 메서드
  addButtonEvent(state: State) {
    this.setEvent('#btn-prev', 'click', () => {
      this.handlePrevBtn(state);
    });
    this.setEvent('#btn-next', 'click', () => {
      this.handleNextBtn(state);
    });
  }

  handlePrevBtn(state: State) {
    let page = this.state.page as number;
    if (page <= 0) return;
    this.setState({ page: --page });
  }

  async handleNextBtn(state: State) {
    const articles = (await this.state.articlesPromise) as Array<Article>;
    let page = this.state.page as number;
    if (page >= articles.length - 1) return;
    this.setState({ page: ++page });
  }

  async addCategoryList(state: State) {
    const { articlesPromise } = state;
    const articles = (await articlesPromise) as Article[];
    const categories = articles.map((article) => {
      return article.mediaInfo.type;
    });

    const categorySet = new Set(categories);
    ($('#category-navbar', this.element) as HTMLElement).innerHTML = [
      ...categorySet,
    ].reduce((acc, cur) => {
      return acc + `<li>${cur}</li>`;
    }, '');
  }

  async addArticleHeader(state: State) {
    const { page, articlesPromise } = state;
    const articles = (await articlesPromise) as Article[];
    const targetArticle = articles[page as number];
    const targetPressImg = targetArticle.mediaInfo.imgSrc;
    const targetModifiedTime = targetArticle.mediaInfo.modifiedTime;
    ($('#article-header', this.element) as HTMLElement).innerHTML = `
             <img src="${targetPressImg}" class="h-5" alt="target-press"/>
             <p class="text-xs text-gray-500">${targetModifiedTime}</p>
             <button id="subscribe-btn" class="px-2 py-px border border-gray-200 bg-gray-100 text-xs text-gray-400 rounded-3xl">+ 구독하기</button>
           `;
  }

  async addMainArticle(state: State) {
    // [리팩토링] 아래 반복되는 3줄
    const { page, articlesPromise } = state;
    const articles = (await articlesPromise) as Article[];
    const targetArticle = articles[page as number];
    const targetMainImg = targetArticle.mainContent.mainImgSrc;
    const targetMainTitle = targetArticle.mainContent.mainTitle;
    ($('#main-article', this.element) as HTMLElement).innerHTML = `
         <img src="${targetMainImg}" class="w-4/5" alt="target-main"/>
         <p class="w-3/4 h-3 text-base ">${targetMainTitle}</p>
      `;
  }

  async addSubArticles(state: State) {
    // [리팩토링] 아래 반복되는 3줄
    const { page, articlesPromise } = state;
    const articles = (await articlesPromise) as Article[];
    const targetArticle = articles[page as number];
    const targetSubArticles = targetArticle.subContent.subNewsList;
    ($('#sub-articles', this.element) as HTMLElement).innerHTML =
      targetSubArticles.reduce((acc, cur) => {
        return (
          acc +
          `
            <li class="w-full h-full">${cur}</li>
          `
        );
      }, '');
  }

  async toggleGridButton(state: State) {
    // 추후 코드 리팩토링
    const { page, articlesPromise } = state;
    const articles = (await articlesPromise) as Article[];
    const CATEGORY_CONTAINER_PAGE_END = articles.length;
    ($('#btn-prev', this.element) as HTMLButtonElement).classList.remove(
      'invisible',
    );
    ($('#btn-next', this.element) as HTMLButtonElement).classList.remove(
      'invisible',
    );
    if (page === CATEGORY_CONTAINER_PAGE_START) {
      ($('#btn-prev', this.element) as HTMLButtonElement).classList.add(
        'invisible',
      );
    }
    if (page === CATEGORY_CONTAINER_PAGE_END - 1) {
      ($('#btn-next', this.element) as HTMLButtonElement).classList.add(
        'invisible',
      );
    }
  }
}
