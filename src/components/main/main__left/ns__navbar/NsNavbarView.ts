import { State } from '@src/types/types';
import { AbstractView } from '@src/types/abstracts.js';
import { $ } from '@utils/dom.js';

export class NsNavbarView extends AbstractView {
  constructor() {
    super();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = `<section class="w-full h-12 flex flex-row justify-between"></section>`;
  }

  render(state: State) {
    const { title } = state;
    if (typeof title === 'string') {
      ($('p', this.element) as HTMLParagraphElement).innerText = title;
    }
  }
}
