import { Article, State } from '@src/types/types';
import { AbstractView } from '@src/types/abstracts.js';
import { $ } from '@utils/dom.js';
import { PRESS_GRID_ITEM_COUNT } from '@src/constants/constants.js';

export class NsPressContainerView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<section class="py-2 flex-auto flex flex-row justify-between items-center">
                                         <button id="btn-prev" class=""><</button>
                                         <ul id="ns__grid-container" class="grid grid-cols-6 grid-rows-4 w-full h-full">
                                         </ul>                                      
                                         <button id="btn-next" class="">></button>
                                       </section>`;
  }

  render(state: State) {
    const { randomArticles } = state;
    const imgSources = (randomArticles as Article[]).map(
      (article) => article.mediaInfo.imgSrc,
    );

    ($('#ns__grid-container', this.element) as HTMLUListElement).innerHTML +=
      imgSources.slice(0, PRESS_GRID_ITEM_COUNT).reduce((acc, cur) => {
        return (
          acc +
          `<li class="border border-gray-100 grid place-content-center"><img src="${cur}" alt="${cur}"></li>`
        );
      }, '');
    console.log(imgSources);

    return;
  }
}
