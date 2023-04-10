import { State } from '@src/types/types';
import { AbstractView } from '@src/types/abstracts.js';
import { $ } from '@utils/dom.js';

export class NsTitleView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<div class="w-1/2 h-full flex flex-row justify-start items-center gap-x-2">
                                        <img src="/public/images/symbols/newspaper.svg" alt="newspaper-symbol">
                                        <p class="text-2xl font-bold"></p>
                                       </div>`;
  }

  render(state: State) {
    const { title } = state;
    if (typeof title === 'string') {
      ($('p', this.element) as HTMLParagraphElement).innerText = title;
    }
  }
}
