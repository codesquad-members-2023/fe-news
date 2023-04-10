import { State } from '@src/types/types';
import { AbstractView } from '@src/types/abstracts.js';

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
