import { State } from '@custom-types/types';
import { AbstractView } from '@custom-types/abstracts.js';

export class MainLeftView extends AbstractView {
  constructor() {
    super();
  }

  protected setWrapper() {
    this._wrapperElement.innerHTML = `<section class="h-full w-full flex flex-col flex-initial"></section>`;
  }

  render(state: State) {
    return;
  }
}
