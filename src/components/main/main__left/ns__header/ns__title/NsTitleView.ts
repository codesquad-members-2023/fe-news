import { State } from '@custom-types/types';
import { TempAbstractView } from '@custom-types/abstracts.js';

export class NsTitleView extends TempAbstractView {
  constructor($target: HTMLElement) {
    super($target);
  }

  template(state: State) {
    return `<a href="" class="h-full flex flex-row justify-start gap-x-2">
              <img src="/public/images/symbols/newspaper.svg" alt="newspaper-symbol">
              <p class="text-2xl font-bold">뉴스스탠드</p>
            </a>`;
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
