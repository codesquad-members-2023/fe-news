import { Component, ObserverViewComponent } from '@custom-types/interfaces';
import { Article, Props, State } from '@custom-types/types';
import { AbstractView } from '@src/types/abstracts.js';
import { NsArticleContainerObservableModel } from '@components/main/main__left/ns__container/ns__category-container/ns__article-container/NsArticleContainerObservableModel.js';
import { $ } from '@utils/dom.js';

export class NsArticleContainerObserverViewComponent
  extends AbstractView
  implements ObserverViewComponent
{
  _observerModel: NsArticleContainerObservableModel;
  constructor(props?: Props) {
    super();
    this._observerModel = new NsArticleContainerObservableModel();

    this.setState(props!);
  }

  // setTemplate은 subscriber 처리하면 안된다. 그러면 element가 초기화되어버림.
  setTemplate() {
    this._templateElement.innerHTML = `<section id="article-container" class="p-3 w-full h-full flex flex-col justify-start items-start text-sm border border-blue-500">
                                         <div id="article-header" class="flex flex-row justify-start items-center gap-x-4">
                                           <button id="subscribe-btn" class="px-2 py-px border border-gray-200 bg-gray-100 text-xs text-gray-400 rounded-3xl">+ 구독하기</button>
                                         </div>
                                         <div id="articles" class="p-3 w-full h-full flex flex-row">
                                          <div id="main-article" class="w-1/3 h-full flex flex-col gap-y-1"></div>
                                          <ul id="sub-articles" class="w-2/3 h-full flex flex-col justify-between"></ul>
                                         </div>
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
    this._observerModel.addSubscriber(this.addArticleHeader.bind(this));
    this._observerModel.addSubscriber(this.addMainArticle.bind(this));
    this._observerModel.addSubscriber(this.addSubArticles.bind(this));
  }

  // 아래 메서드들은 subscriber이 된다.
  async addArticleHeader(state: State) {
    const { page, articlesPromise } = state;
    const articles = (await articlesPromise) as Article[];
    const targetArticle = articles[page as number];
    const targetPressImg = targetArticle.mediaInfo.imgSrc;
    const targetModifiedTime = targetArticle.mediaInfo.modifiedTime;
    ($('#article-header', this.element) as HTMLElement).insertAdjacentHTML(
      'afterbegin',
      `
             <img src="${targetPressImg}" class="h-5" alt="target-press"/>
             <p class="text-xs text-gray-500">${targetModifiedTime}</p>
           `,
    );
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
    console.log(targetSubArticles);
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
}
