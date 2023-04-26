import { Article, Props, State } from '@custom-types/types';
import { TempAbstractView } from '@src/types/abstracts.js';
import { NsCategoryNavbarComponent } from '@components/main/main__left/ns__container/ns__category-container/ns__category-navbar/NsCategoryNavbarComponent.js';
import { NsArticleContainerObserverViewComponent } from '@components/main/main__left/ns__container/ns__category-container/ns__article-container/NsArticleContainerObserverViewComponent.js';
import { $ } from '@utils/dom.js';
import { CATEGORY_CONTAINER_PAGE_START } from '@src/constants/constants.js';

/*
[리팩토링 예정] 고민
1. 옵저버 패턴을 유지하면서 리팩토링?
2. mvc 패턴으로 변경하면서 리팩토링?

- 추후에 flux 패턴으로 리팩토링할 거라면 여기서는 다른 컴포넌트들과 동일한 mvc 구조로 만들고 리팩토링하는 게 더 편하지 않을까?
*/

export class NsCategoryContainerView extends TempAbstractView {
  constructor($target: HTMLElement) {
    super($target);
  }

  template(state: State) {
    return `<section id="category-container" class="h-full flex flex-col justify-start relative">
              <div id="category-navbar-wrapper"></div>
              <div id="article-container-wrapper"></div>
              <button id="btn-prev" class="absolute left-0 top-1/2 border rounded-full bg-white drop-shadow-very-xl">
                <img src="/public/images/symbols/chevron-left.svg" alt="chevron-left" class="h-6 w-6"/>
              </button>
              <button id="btn-next" class="absolute right-0 top-1/2 border rounded-full bg-white drop-shadow-very-xl">
                <img src="/public/images/symbols/chevron-right.svg" alt="chevron-right" class="h-6 w-6"/>
              </button>
            </section>`;
  }

  render(state: State) {
    // 처음 state 받아오기 전에는 실행하지 않는다.
    if (Object.keys(state).length === 0) return;
    this.$target.innerHTML = this.template(state);
    this.addChildren(state);
    this.setEvents(state);
    this.toggleGridButton(state);
  }

  setEvents(state: State) {
    // 버튼에 이벤트 추가
    const { handleToPrev, handleToNext } = state;
    ($('#btn-prev', this.$target) as HTMLButtonElement).addEventListener(
      'click',
      handleToPrev as EventListener,
    );
    ($('#btn-next', this.$target) as HTMLButtonElement).addEventListener(
      'click',
      handleToNext as EventListener,
    );
  }

  addChildren(props: Props) {
    const nsCategoryNavbar = new NsCategoryNavbarComponent(
      $('#category-navbar-wrapper', this.$target) as HTMLElement,
      props,
    );
    const nsArticleContainer = new NsArticleContainerObserverViewComponent(
      props,
    );
    ($('#article-container-wrapper', this.$target) as HTMLElement).appendChild(
      nsArticleContainer.element,
    );
  }

  async toggleGridButton(state: State) {
    // 추후 코드 리팩토링
    const { page, articlesPromise } = state;
    const articles = (await articlesPromise) as Article[];
    const CATEGORY_CONTAINER_PAGE_END = articles.length;
    ($('#btn-prev', this.$target) as HTMLButtonElement).classList.remove(
      'invisible',
    );
    ($('#btn-next', this.$target) as HTMLButtonElement).classList.remove(
      'invisible',
    );
    if (page === CATEGORY_CONTAINER_PAGE_START) {
      ($('#btn-prev', this.$target) as HTMLButtonElement).classList.add(
        'invisible',
      );
    }
    if (page === CATEGORY_CONTAINER_PAGE_END - 1) {
      ($('#btn-next', this.$target) as HTMLButtonElement).classList.add(
        'invisible',
      );
    }
  }
}

// const { articlesPromise } = state;
// const articles = (await articlesPromise) as Article[];

// constructor
// const page = 0;

// addEvent에 있던 애들
// this.setState({ ...props, page });
// this.addButtonEvent(this.state);

// [기억] ns-article-container에 가게 하자.
// async addArticleHeader(state: State) {
//   const { page, articlesPromise } = state;
//   const articles = (await articlesPromise) as Article[];
//   const targetArticle = articles[page as number];
//   const targetPressImg = targetArticle.mediaInfo.imgSrc;
//   const targetModifiedTime = targetArticle.mediaInfo.modifiedTime;
//   ($('#article-header', this.element) as HTMLElement).innerHTML = `
//              <img src="${targetPressImg}" class="h-5" alt="target-press"/>
//              <p class="text-xs text-gray-500">${targetModifiedTime}</p>
//              <button id="subscribe-btn" class="px-2 py-px border border-gray-200 bg-gray-100 text-xs text-gray-400 rounded-3xl">+ 구독하기</button>
//            `;
// }

// [기억] ns-article-container에 가게 하자.
// async addMainArticle(state: State) {
//   // [리팩토링] 아래 반복되는 3줄
//   const { page, articlesPromise } = state;
//   const articles = (await articlesPromise) as Article[];
//   const targetArticle = articles[page as number];
//   const targetMainImg = targetArticle.mainContent.mainImgSrc;
//   const targetMainTitle = targetArticle.mainContent.mainTitle;
//   ($('#main-article', this.element) as HTMLElement).innerHTML = `
//          <img src="${targetMainImg}" class="w-4/5" alt="target-main"/>
//          <p class="w-3/4 h-3 text-base ">${targetMainTitle}</p>
//       `;
// }

// [기억] ns-article-container에 가게 하자.
// async addSubArticles(state: State) {
//   // [리팩토링] 아래 반복되는 3줄
//   const { page, articlesPromise } = state;
//   const articles = (await articlesPromise) as Article[];
//   const targetArticle = articles[page as number];
//   const targetSubArticles = targetArticle.subContent.subNewsList;
//   ($('#sub-articles', this.element) as HTMLElement).innerHTML =
//     targetSubArticles.reduce((acc, cur) => {
//       return (
//         acc +
//         `
//             <li class="w-full h-full">${cur}</li>
//           `
//       );
//     }, '');
// }
