import { State } from '@custom-types/types';
import { AbstractView } from '@custom-types/abstracts.js';
import { $ } from '@utils/dom.js';

export class NavbarRightView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<div class="w-1/2 flex flex-row justify-end items-center gap-x-4">
                                         <img id="list-btn" src="/public/images/symbols/list-view.svg" alt="list-view-symbol">
                                         <img id="grid-btn" src="/public/images/symbols/grid-view.svg" alt="grid-view-symbol">
                                       </div>`;
  }

  render(state: State) {
    console.log(state);
    this.addChangeViewEvent(state);
    return;
  }

  addChangeViewEvent(state: State) {
    const { handleToView } = state;
    this.setEvent('#list-btn', 'click', (e) => {
      (handleToView as (state: State) => void)({ view: 'LIST' });
    });
    this.setEvent('#grid-btn', 'click', (e) => {
      (handleToView as (state: State) => void)({ view: 'GRID' });
    });
  }
}
