import { State } from '@custom-types/types';
import { TempAbstractView } from '@custom-types/abstracts.js';
import { NsHeaderComponent } from '@components/main/main__left/ns__header/NsHeaderComponent.js';
import { NsIssueContainerComponent } from '@components/main/main__left/ns__issue-container/NsIssueContainerComponent.js';
import { NsContainerComponent } from '@components/main/main__left/ns__container/NsContainerComponent.js';

export class MainLeftView extends TempAbstractView {
  constructor($target: HTMLElement) {
    super($target);
  }

  template(state: State) {
    return `<section class="h-full w-full flex flex-col flex-initial">
              <div id="ns-header-wrapper" class="px-2 w-full h-12"></div>
              <div id="ns-navbar-wrapper" class="w-full h-12 "></div>
              <div id="ns-container-wrapper" class="px-2 h-full border border-blue-500 "></div>
            </section>`;
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
    const nsHeader = new NsHeaderComponent(
      this.$target.querySelector('#ns-header-wrapper') as HTMLElement,
    );
    const nsNavbar = new NsIssueContainerComponent(
      this.$target.querySelector('#ns-navbar-wrapper') as HTMLElement,
    );
    // [리팩토링 예정] 여기부터 시작 🥹
    const nsContainer = new NsContainerComponent(
      this.$target.querySelector('#ns-container-wrapper') as HTMLElement,
    );
  }
}
