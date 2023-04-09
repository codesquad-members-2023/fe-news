import { State } from '@src/types/types';
import { AbstractView } from '@src/types/abstracts.js';

export class MainLeftView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<section class="h-full bg-green-100 border border-green-500 flex-initial basis-2/3 flex flex-column"></section>`;
  }

  render(state: State) {
    return;
  }
}
