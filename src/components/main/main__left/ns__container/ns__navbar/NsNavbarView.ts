import { State } from '@custom-types/types';
import { AbstractView } from '@custom-types/abstracts.js';

export class NsNavbarView extends AbstractView {
  constructor() {
    super();
  }

  protected setWrapper() {
    this._wrapperElement.innerHTML = `<nav class="h-full flex flex-row items-center"></nav>`;
  }

  render(state: State) {
    return;
  }
}
