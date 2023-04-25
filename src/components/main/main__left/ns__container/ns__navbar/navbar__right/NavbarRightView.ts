import { State } from '@custom-types/types';
import { TempAbstractView } from '@custom-types/abstracts.js';
import { $ } from '@utils/dom.js';

export class NavbarRightView extends TempAbstractView {
  constructor($target: HTMLElement) {
    super($target);
  }

  template(state: State) {
    return `<div class="flex flex-row justify-end items-center gap-x-4">
              <button id="list-btn" class="w-4 h-4 bg-list-off"></button>
              <button id="grid-btn" class="w-4 h-4 bg-grid-on"></button>
            </div>`;
  }

  render(state: State) {
    this.$target.innerHTML = this.template(state);
    this.addChildren(state);
    this.setEvents(state);
  }

  setEvents(state: State) {
    const { handleToView } = state;
    const $gridBtn = $('#grid-btn', this.$target) as HTMLButtonElement;
    const $listBtn = $('#list-btn', this.$target) as HTMLButtonElement;
    $gridBtn.addEventListener('click', () => {
      (handleToView as (state: State) => void)({ view: 'GRID' });
      // [기능 수정 예정] toggleGridBtn() 적용이 안됨
      (this.toggleGridBtn as () => void)();
    });
    $listBtn.addEventListener('click', () => {
      (handleToView as (state: State) => void)({ view: 'LIST' });
      // [기능 수정 예정] toggleListBtn() 적용이 안됨
      (this.toggleListBtn as () => void)();
    });
  }

  addChildren(state: State) {
    return;
  }

  toggleListBtn() {
    ($('#list-btn', this.$target) as HTMLButtonElement).classList.add(
      'bg-list-on',
    );
    ($('#list-btn', this.$target) as HTMLButtonElement).classList.remove(
      'bg-list-off',
    );
    ($('#grid-btn', this.$target) as HTMLButtonElement).classList.add(
      'bg-grid-off',
    );
    ($('#grid-btn', this.$target) as HTMLButtonElement).classList.remove(
      'bg-grid-on',
    );
    console.log($('#grid-btn', this.$target) as HTMLButtonElement);
  }

  toggleGridBtn() {
    ($('#grid-btn', this.$target) as HTMLButtonElement).classList.add(
      'bg-grid-on',
    );
    ($('#grid-btn', this.$target) as HTMLButtonElement).classList.remove(
      'bg-grid-off',
    );
    ($('#list-btn', this.$target) as HTMLButtonElement).classList.add(
      'bg-list-off',
    );
    ($('#list-btn', this.$target) as HTMLButtonElement).classList.remove(
      'bg-list-on',
    );
  }
}
