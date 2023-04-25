import { State } from '@custom-types/types';
import { AbstractView } from '@custom-types/abstracts.js';
import { $ } from '@utils/dom.js';

export class NavbarLeftView extends AbstractView {
  constructor() {
    super();
  }

  protected setWrapper() {
    this._wrapperElement.innerHTML = `<div class="flex flex-row justify-start items-center gap-x-4">
                                         <span id="press-total" class="text-base font-bold">전체 언론사</span>
                                         <span id="press-subscribe" class="text-base text-gray-200">내가 구독한 언론사</span>
                                       </div>`;
  }

  render(state: State) {
    return;
  }
}
