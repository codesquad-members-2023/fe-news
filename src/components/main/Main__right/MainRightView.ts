import { State } from '@utils/types';
import { AbstractView } from '@utils/abstracts.js';

export class MainRightView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<section class="h-full bg-yellow-100 border border-yellow-500 flex-initial basis-1/3 text-3xl text-gray-500 text-center"></section>`;
  }

  render(state: State) {
    const { title } = state;
    if (typeof title === 'string') {
      this.element.textContent = title;
    }
  }
}
