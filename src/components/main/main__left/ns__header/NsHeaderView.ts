import { State } from '@utils/types';
import { AbstractView } from '@utils/abstracts.js';

export class NsHeaderView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<section class="w-full h-16 bg-green-100 border border-green-500"></section>`;
  }

  render(state: State) {
    return;
  }
}
