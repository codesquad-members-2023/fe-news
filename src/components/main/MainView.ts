import { State } from '@custom-types/types';
import { TempAbstractView } from '@custom-types/abstracts.js';

export class MainView extends TempAbstractView {
  constructor($target: HTMLElement) {
    super($target);
  }

  template(state: State) {
    return `<main class="h-full flex flex-row justify-end flex-initial">
              <div id="left-main-wrapper" class="h-full w-2/3"></div>
              <div id="right-main-wrapper" class="h-full w-1/3"></div>
            </main>`;
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
