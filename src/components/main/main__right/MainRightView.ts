import { State } from '@src/types/types';
import { AbstractView } from '@src/types/abstracts.js';

export class MainRightView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<section class="h-full w-1/3 bg-green-100 border border-green-500 flex-initial text-3xl text-gray-500 grid place-content-center">MainRight</section>`;
  }

  render(state: State) {
    return;
  }
}
