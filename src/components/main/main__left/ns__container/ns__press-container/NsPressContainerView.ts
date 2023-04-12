import { Article, State } from '@src/types/types';
import { AbstractView } from '@src/types/abstracts.js';
import { $ } from '@utils/dom.js';
import { PRESS_GRID_ITEM_COUNT } from '@src/constants/constants.js';

export class NsPressContainerView extends AbstractView {
  constructor() {
    super();
  }

  setTemplate() {
    this._templateElement.innerHTML = `<section class="py-2 flex-auto flex flex-row justify-between items-center">
                                         <button id="btn-prev" class=""><</button>
                                         <ul id="ns__grid-container" class="grid grid-cols-6 grid-rows-4 w-full h-full">
                                         </ul>                                      
                                         <button id="btn-next" class="">></button>
                                       </section>`;
  }

  render(state: State) {
    const { articles, page, handleToPrev, handleToNext } = state;
    if (articles) {
      const imgSources = (articles as Article[]).map(
        (article) => article.mediaInfo.imgSrc,
      );
      ($('#ns__grid-container', this.element) as HTMLUListElement).innerHTML =
        imgSources
          .slice(
            +page * PRESS_GRID_ITEM_COUNT,
            (+page + 1) * PRESS_GRID_ITEM_COUNT,
          )
          .reduce((acc, cur) => {
            return (
              acc +
              `<li class="border border-gray-100 grid place-content-center"><img src="${cur}" alt="${cur}"></li>`
            );
          }, '');
    }
    this.setEvent('#btn-prev', 'click', handleToPrev as EventListener);
    this.setEvent('#btn-next', 'click', handleToNext as EventListener);
  }
}
