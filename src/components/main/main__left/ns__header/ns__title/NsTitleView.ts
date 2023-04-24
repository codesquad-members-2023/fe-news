import { State } from '@custom-types/types';
import { AbstractView } from '@custom-types/abstracts.js';
import { $ } from '@utils/dom.js';

export class NsTitleView extends AbstractView {
  constructor() {
    super();
  }

  protected setWrapper() {
    this._wrapperElement.innerHTML = `<a href="" class="w-1/2 h-full flex flex-row justify-start items-center gap-x-2">
                                         <img src="/public/images/symbols/newspaper.svg" alt="newspaper-symbol">
                                         <p class="text-2xl font-bold">뉴스스탠드</p>
                                       </a>`;
  }

  render(state: State) {
    return;
  }
}
