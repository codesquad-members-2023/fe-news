import { State } from '@utils/types';
import { AbstractView } from '@utils/abstracts.js';

export class MainView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<main class="h-4/6 bg-green-100 border border-green-500 flex flex-row justify-end"></main>`;
  }

  render(state: State) {
    return;
  }
}
