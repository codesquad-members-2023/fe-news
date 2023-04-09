import { State } from '@src/types/types';
import { AbstractView } from '@src/types/abstracts.js';

export class HeaderView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<header class="h-1/6 bg-amber-100 border border-yellow-500 text-3xl text-gray-500 text-center"></header>`;
  }

  render(state: State) {
    const { title } = state;
    if (typeof title === 'string') {
      this.element.textContent = title;
    }
  }
}
