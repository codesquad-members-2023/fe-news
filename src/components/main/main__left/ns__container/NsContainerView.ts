import { State } from '@custom-types/types';
import { AbstractView } from '@custom-types/abstracts.js';
import { $ } from '@utils/dom.js';

export class NsContainerView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<section class="px-2 h-full border border-blue-500 flex flex-col justify-start"></section>`;
  }

  render(state: State) {
    this.changeView(state);
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
}
