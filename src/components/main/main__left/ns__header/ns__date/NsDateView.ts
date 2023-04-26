import { State } from '@custom-types/types';
import { TempAbstractView } from '@custom-types/abstracts.js';
import { $ } from '@utils/dom.js';

export class NsDateView extends TempAbstractView {
  constructor($target: HTMLElement) {
    super($target);
  }

  template(state: State) {
    return `<p class="text-right text-base/[3rem] font-medium text-gray-500">${state.date}</p>`;
  }

  render(state: State) {
    this.$target.innerHTML = this.template(state);
    this.addChildren(state);
    this.setEvents(state);
  }

  setEvents(state: State) {
    return;
  }

  addChildren(state: State) {
    return;
  }
}
