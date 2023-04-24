import { State } from '@custom-types/types';
import { AbstractView } from '@custom-types/abstracts.js';

export class NsNavbarView extends AbstractView {
  constructor() {
    super();
  }

  protected setWrapper() {
    this._wrapperElement.innerHTML = `<nav class="w-full h-12 flex flex-row"></nav>`;
  }

  render(state: State) {
    return;
  }
}
