import { State } from '@src/types/types';
import { AbstractView } from '@src/types/abstracts.js';

export class FooterView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<footer class="h-1/6 bg-green-100 border border-green-500 text-3xl text-gray-500 text-center">Footer</footer>`;
  }

  render(state: State) {
    return;
  }
}
