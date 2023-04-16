import { State } from '@custom-types/types';
import { AbstractView } from '@custom-types/abstracts.js';

export class NsNavbarView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<nav class="w-full h-12 flex flex-row"></nav>`;
  }

  render(state: State) {
    return;
  }
}
