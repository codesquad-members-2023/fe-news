import { State } from '@src/types/types';
import { AbstractView } from '@src/types/abstracts.js';

export class NsHeaderView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<section class="w-full h-12 bg-green-100 border border-green-500 flex flex-row justify-between"></section>`;
  }

  render(state: State) {
    return;
  }
}
