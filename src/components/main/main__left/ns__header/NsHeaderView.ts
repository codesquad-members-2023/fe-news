import { State } from '@src/types/types';
import { AbstractView } from '@src/types/abstracts.js';

export class NsHeaderView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<section class="px-2 w-full h-12 flex flex-row justify-between"></section>`;
  }

  render(state: State) {
    return;
  }
}
