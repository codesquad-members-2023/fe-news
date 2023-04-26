import { Article, Props, State } from '@custom-types/types';
import { TempAbstractView } from '@src/types/abstracts.js';
import { NsCategoryNavbarComponent } from '@components/main/main__left/ns__container/ns__category-container/ns__category-navbar/NsCategoryNavbarComponent.js';
import { NsArticleContainerComponent } from '@components/main/main__left/ns__container/ns__category-container/ns__article-container/NsArticleContainerComponent.js';
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
              <div id="category-navbar-wrapper" class="w-full h-10"></div>
              <div id="article-container-wrapper" class="w-full h-full"></div>
              <button id="btn-prev" class="absolute -left-2.5 top-1/2 border rounded-full bg-white drop-shadow-very-xl">
                <img src="/public/images/symbols/chevron-left.svg" alt="chevron-left" class="h-6 w-6"/>
              </button>
              <button id="btn-next" class="absolute -right-2.5 top-1/2 border rounded-full bg-white drop-shadow-very-xl">
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
    this.toggleListButton(state);
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
    const nsArticleContainer = new NsArticleContainerComponent(
      $('#article-container-wrapper', this.$target) as HTMLElement,
      props,
    );
  }

  async toggleListButton(state: State) {
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
