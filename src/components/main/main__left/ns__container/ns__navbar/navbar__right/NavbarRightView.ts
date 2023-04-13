import { State } from '@src/types/types';
import { AbstractView } from '@src/types/abstracts.js';
import { $ } from '@utils/dom.js';

export class NavbarRightView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<div class="w-1/2 flex flex-row justify-end items-center gap-x-4">
                                         <img src="/public/images/symbols/list-view.svg" alt="list-view-symbol">
                                         <img src="/public/images/symbols/grid-view.svg" alt="grid-view-symbol">
                                       </div>`;
  }

  render(state: State) {
    return;
  }
}
