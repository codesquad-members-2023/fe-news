import { State } from '@custom-types/types';
import { AbstractView } from '@custom-types/abstracts.js';
import { $ } from '@utils/dom.js';

export class NsDateView extends AbstractView {
  constructor() {
    super();
  }

  protected setWrapper() {
    this._wrapperElement.innerHTML = `<p class="text-right text-base/[3rem] font-medium text-gray-500"></p>`;
  }

  render(state: State) {
    const { date } = state;
    if (typeof date === 'string') {
      this.element.textContent = date;
    }
  }
}
