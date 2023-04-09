import { State } from '@src/types/types';
import { AbstractView } from '@src/types/abstracts.js';

export class MainView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<main class="h-4/6 border border-green-500 flex flex-row justify-end"></main>`;
  }

  render(state: State) {
    return;
  }
}
