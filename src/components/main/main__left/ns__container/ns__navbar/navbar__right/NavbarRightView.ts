import { State } from '@custom-types/types';
import { AbstractView } from '@custom-types/abstracts.js';
import { $ } from '@utils/dom.js';

export class NavbarRightView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<div class="w-1/2 flex flex-row justify-end items-center gap-x-4">
                                         <button id="list-btn" class="w-4 h-4 bg-list-off"></button>
                                         <button id="grid-btn" class="w-4 h-4 bg-grid-on"></button>
                                       </div>`;
  }

  render(state: State) {
    this.addChangeViewEvent(state);
    return;
  }

  addChangeViewEvent(state: State) {
    const { handleToView, handleListBtn, handleGridBtn } = state;
    this.setEvent('#list-btn', 'click', (e) => {
      (handleToView as (state: State) => void)({ view: 'LIST' });
      (handleListBtn as () => void)();
    });
    this.setEvent('#grid-btn', 'click', (e) => {
      (handleToView as (state: State) => void)({ view: 'GRID' });
      (handleGridBtn as () => void)();
    });
  }
}
