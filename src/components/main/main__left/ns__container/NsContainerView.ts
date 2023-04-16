import { State } from '@custom-types/types';
import { AbstractView } from '@custom-types/abstracts.js';
import { $ } from '@utils/dom.js';
export class NsContainerView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<section class="px-2 border border-blue-500 flex flex-col flex-auto justify-start"></section>`;
  }

  render(state: State) {
    this.changeView(state);
    this.addChangeViewEvent(state);
    return;
  }

  changeView(state: State) {
    const { view } = state;
    if (view === 'GRID') {
      $('#press-container', this.element)!.classList.remove('hidden');
      $('#category-container', this.element)!.classList.add('hidden');
    }
    if (view === 'LIST') {
      $('#category-container', this.element)!.classList.remove('hidden');
      $('#press-container', this.element)!.classList.add('hidden');
    }
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
