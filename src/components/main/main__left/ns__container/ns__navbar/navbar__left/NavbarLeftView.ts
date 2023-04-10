import { State } from '@src/types/types';
import { AbstractView } from '@src/types/abstracts.js';
import { $ } from '@utils/dom.js';

export class NavbarLeftView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<div class="w-1/2 flex flex-row justify-start items-center gap-x-4">
                                         <span id="press-total" class="text-base font-bold">전체 언론사</span>
                                         <span id="press-subscribe" class="text-base text-gray-200">내가 구독한 언론사</span>
                                       </div>`;
  }

  render(state: State) {
    return;
  }
}
