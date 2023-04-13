import { Article, State } from '@src/types/types';
import { AbstractView } from '@src/types/abstracts.js';
import { $ } from '@utils/dom.js';
import {
  PRESS_GRID_CONTAINER_COUNT,
  PRESS_GRID_ITEM_COUNT,
} from '@src/constants/constants.js';

export class NsPressContainerView extends AbstractView {
  constructor() {
    super();
  }

  setTemplate() {
    this._templateElement.innerHTML = `<section class="px-3 flex-auto flex flex-row justify-between items-center relative">
                                         <button id="btn-prev" class="absolute left-0 border rounded-full bg-white drop-shadow-very-xl">
                                           <img src="/public/images/symbols/chevron-left.svg" alt="chevron-left" class="h-6 w-6"/>
                                         </button>
                                         <ul id="ns__grid-container" class="grid grid-cols-6 grid-rows-4 w-full h-full">
                                         </ul>                                      
                                         <button id="btn-next" class="absolute right-0 border rounded-full bg-white drop-shadow-very-xl">
                                           <img src="/public/images/symbols/chevron-right.svg" alt="chevron-right" class="h-6 w-6"/>
                                         </button>
                                       </section>`;
  }

  render(state: State) {
    this.addGridItems(state);
    this.addGridButtonEvent(state);
    this.toggleButton(state);
  }

  addGridItems(state: State) {
    const { articles, page } = state;
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
            `<li class="border border-gray-100 grid place-content-center"><img class="h-5" src="${cur}" alt="${cur}"></li>`
          );
        }, '');
  }

  addGridButtonEvent(state: State) {
    const { handleToPrev, handleToNext } = state;
    this.setEvent('#btn-prev', 'click', handleToPrev as EventListener);
    this.setEvent('#btn-next', 'click', handleToNext as EventListener);
  }

  toggleButton(state: State) {
    const { page } = state;
    ($('#btn-prev', this.element) as HTMLButtonElement).classList.remove(
      'invisible',
    );
    ($('#btn-next', this.element) as HTMLButtonElement).classList.remove(
      'invisible',
    );
    if (page === 0) {
      ($('#btn-prev', this.element) as HTMLButtonElement).classList.add(
        'invisible',
      );
    }
    if (page === PRESS_GRID_CONTAINER_COUNT - 1) {
      ($('#btn-next', this.element) as HTMLButtonElement).classList.add(
        'invisible',
      );
    }
  }
}
