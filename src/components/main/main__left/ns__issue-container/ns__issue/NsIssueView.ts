import { State } from '@custom-types/types';
import { TempAbstractView } from '@custom-types/abstracts.js';

export class NsIssueView extends TempAbstractView {
  constructor($target: HTMLElement) {
    super($target);
  }

  template(state: State) {
    return `<div class="flex flex-row justify-start items-center">
              <div class="mx-2 w-14 text-sm font-bold">연합뉴스</div>
              <div id="article__title-container" class="w-fit truncate">
                <p id="article__title" class="mx-2 w-auto text-sm font-medium text-gray-500 truncate">${state.issue}</p>
              </div>
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
