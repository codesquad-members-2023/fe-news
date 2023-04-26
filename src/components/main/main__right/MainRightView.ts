import { State } from '@custom-types/types';
import { TempAbstractView } from '@custom-types/abstracts.js';

export class MainRightView extends TempAbstractView {
  constructor($target: HTMLElement) {
    super($target);
  }

  template(state: State) {
    return `<section class="h-full bg-green-100 border border-green-500 flex-initial text-3xl text-gray-500 grid place-content-center">MainRight</section>`;
  }

  render(state: State) {
    this.$target.innerHTML = this.template(state);
    this.addChildren(state);
    this.setEvents(state);
  }

  addChildren(state: State) {
    return;
  }

  setEvents(state: State) {
    return;
  }
}
