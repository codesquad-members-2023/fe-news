import { State } from '@custom-types/types';
import { AbstractView } from '@custom-types/abstracts.js';
import { $ } from '@utils/dom.js';

export class NsIssueContainerView extends AbstractView {
  constructor() {
    super();
  }

  protected setWrapper() {
    this._wrapperElement.innerHTML = `<section class="w-full h-12 flex flex-row justify-between gap-x-2"></section>`;
  }

  render(state: State) {
    return;
  }
}
