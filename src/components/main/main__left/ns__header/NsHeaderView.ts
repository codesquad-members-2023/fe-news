import { State } from '@custom-types/types';
import { AbstractView } from '@custom-types/abstracts.js';

export class NsHeaderView extends AbstractView {
  constructor() {
    super();
  }

  protected setWrapper() {
    this._wrapperElement.innerHTML = `<section class="flex flex-row justify-between"></section>`;
  }

  render(state: State) {
    return;
  }
}
