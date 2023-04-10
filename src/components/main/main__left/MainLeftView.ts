import { State } from '@src/types/types';
import { AbstractView } from '@src/types/abstracts.js';

export class MainLeftView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<section class="h-full w-2/3 bg-green-100 border border-green-500 flex flex-col flex-initial"></section>`;
  }

  render(state: State) {
    return;
  }
}
