import { Article, Props, State } from '@custom-types/types';
import { TempAbstractView } from '@src/types/abstracts.js';

export class NsArticleContainerView extends TempAbstractView {
  constructor($target: HTMLElement) {
    super($target);
  }

  async template(state: State) {
    const { page, articlesPromise } = state;
    const articles = (await articlesPromise) as Article[];
    const targetArticle = articles[page as number];
    const targetPressImg = targetArticle.mediaInfo.imgSrc;
    const targetModifiedTime = targetArticle.mediaInfo.modifiedTime;

    const targetMainImg = targetArticle.mainContent.mainImgSrc;
    const targetMainTitle = targetArticle.mainContent.mainTitle;

    const targetSubArticles = targetArticle.subContent.subNewsList;
    return `<section id="article-container" class="p-3 w-full h-full flex flex-col justify-start items-start text-sm border border-blue-500">
              <div id="article-header" class="flex flex-row justify-start items-center gap-x-4">
                <img src="${targetPressImg}" class="h-5" alt="target-press"/>
                <p class="text-xs text-gray-500">${targetModifiedTime}</p>
                <button id="subscribe-btn" class="px-2 py-px border border-gray-200 bg-gray-100 text-xs text-gray-400 rounded-3xl">+ 구독하기</button>
              </div>
              <div id="articles" class="p-3 w-full h-full flex flex-row justify-around">
                <div id="main-article" class="w-1/3 h-full flex flex-col gap-y-1">
                  <img src="${targetMainImg}" class="w-4/5" alt="target-main"/>
                  <p class="w-3/4 h-3 text-base ">${targetMainTitle}</p>
                </div>
                <ul id="sub-articles" class="w-2/3 h-full flex flex-col justify-between">
                  ${targetSubArticles.reduce(
                    (acc, cur) => acc + `<li class="w-full h-full">${cur}</li>`,
                    '',
                  )}
                </ul>
              </div>
            </section>`;
  }

  async render(state: State) {
    // 처음 state 받아오기 전에는 실행하지 않는다.
    if (Object.keys(state).length === 0) return;
    this.$target.innerHTML = await this.template(state);
    this.addChildren(state);
    this.setEvents(state);
  }

  setEvents(state: State) {
    return;
  }

  addChildren(state: State) {
    return;
  }
}

// const { articlesPromise } = state;
// const articles = (await articlesPromise) as Article[];

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
// [리팩토링] 아래 반복되는 3줄
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
