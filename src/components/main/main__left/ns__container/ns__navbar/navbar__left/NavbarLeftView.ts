import { State } from '@custom-types/types';
import { TempAbstractView } from '@custom-types/abstracts.js';

export class NavbarLeftView extends TempAbstractView {
  constructor($target: HTMLElement) {
    super($target);
  }

  template(state: State) {
    return `<div class="flex flex-row justify-start items-center gap-x-4">
              <span id="press-total" class="text-base font-bold">전체 언론사</span>
              <span id="press-subscribe" class="text-base text-gray-200">내가 구독한 언론사</span>
            </div>`;
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
