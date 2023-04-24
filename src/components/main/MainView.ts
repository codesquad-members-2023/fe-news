import { State } from '@custom-types/types';
import { TempAbstractView } from '@custom-types/abstracts.js';
import { MainLeftComponent } from '@components/main/main__left/MainLeftComponent.js';
import { MainRightComponent } from '@components/main/main__right/MainRightComponent.js';

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

  addChildren(state: State) {
    const left = new MainLeftComponent(
      this.$target.querySelector('#left-main-wrapper') as HTMLElement,
    );
    const right = new MainRightComponent(
      this.$target.querySelector('#right-main-wrapper') as HTMLElement,
    );
  }

  setEvents(state: State) {
    return;
  }
}
