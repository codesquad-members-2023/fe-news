import { Article, Props, State } from '@custom-types/types';
import { TempAbstractView } from '@src/types/abstracts.js';

export class NsCategoryNavbarView extends TempAbstractView {
  constructor($target: HTMLElement) {
    super($target);
  }

  async template(state: State) {
    const articles = (await state.articlesPromise) as Article[];
    const categories = articles.map((article) => {
      return article.mediaInfo.type;
    });
    const categorySet = new Set(categories);

    return `<ul id="category-navbar" class="w-full h-full flex flex-row justify-start items-center bg-gray-100 text-sm text-gray-500 border border-gray-200 gap-x-8">
              ${[...categorySet].reduce(
                (acc, cur) => acc + `<li>${cur}</li>`,
                '',
              )}
            </ul>`;
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

  addChildren(props: Props) {
    return;
  }
}
