import { State } from '@utils/types';
import { AbstractView } from '@utils/abstracts.js';

export class MainLeftView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<section class="h-full bg-red-100 border border-red-500 flex-initial basis-2/3"></section>`;
  }

  render(state: State) {
    return;
  }
}
