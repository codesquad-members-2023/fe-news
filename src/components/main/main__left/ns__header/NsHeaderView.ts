import { State } from '@custom-types/types';
import { AbstractView } from '@custom-types/abstracts.js';

export class NsHeaderView extends AbstractView {
  constructor() {
    super();
  }

  protected setWrapper() {
    this._wrapperElement.innerHTML = `<section class="px-2 w-full h-12 flex flex-row justify-between"></section>`;
  }

  render(state: State) {
    return;
  }
}
