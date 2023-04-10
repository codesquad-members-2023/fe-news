import { State } from '@src/types/types';
import { AbstractView } from '@src/types/abstracts.js';
import { $ } from '@utils/dom.js';

export class NsArticlebarView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<div class="w-1/2 bg-slate-50 border border-gray-100 flex flex-row justify-start items-center">
                                         <div class="mx-2 w-14 text-sm font-bold"></div>
                                         <p class="mx-2 w-fit text-sm font-medium text-gray-500 truncate"></p>
                                       </div>`;
  }

  render(state: State) {
    const { press, articleTitle } = state;
    if (typeof press === 'string') {
      ($('div', this.element) as HTMLParagraphElement).innerText = press;
    }
    if (typeof articleTitle === 'string') {
      ($('p', this.element) as HTMLParagraphElement).innerText = articleTitle;
    }
  }
}
