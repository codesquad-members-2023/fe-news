import { State } from '@custom-types/types';
import { AbstractView } from '@custom-types/abstracts.js';

export class NsContainerView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<section class="px-2 border border-blue-500 flex flex-col flex-auto justify-start"></section>`;
  }

  render(state: State) {
    return;
  }
}
