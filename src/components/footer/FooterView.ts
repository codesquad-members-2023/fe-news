import { State } from '@custom-types/types';
import { TempAbstractView } from '@custom-types/abstracts.js';

export class FooterView extends TempAbstractView {
  constructor($target: HTMLElement) {
    super($target);
  }

  template(state: State) {
    return `<footer class="h-full bg-green-100 border border-green-500 text-3xl text-gray-500 grid place-content-center">Footer</footer>`;
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
