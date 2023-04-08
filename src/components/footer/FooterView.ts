import { State } from '@utils/types';
import { AbstractView } from '@utils/abstracts.js';

export class FooterView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<footer class="h-1/6 bg-amber-100 border border-yellow-500 text-3xl text-gray-500 text-center"></footer>`;
  }

  render(state: State) {
    const { title } = state;
    if (typeof title === 'string') {
      this.element.textContent = title;
    }
  }
}
