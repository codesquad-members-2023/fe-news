import { State } from '@custom-types/types';
import { TempAbstractView } from '@custom-types/abstracts.js';
import { NsTitleComponent } from '@components/main/main__left/ns__header/ns__title/NsTitleComponent.js';
import { NsDateComponent } from '@components/main/main__left/ns__header/ns__date/NsDateComponent.js';

export class NsHeaderView extends TempAbstractView {
  constructor($target: HTMLElement) {
    super($target);
  }

  template(state: State) {
    return `<section class="flex flex-row justify-between items-center">
              <div id="ns-title-wrapper" class="w-1/2 h-full"></div>
              <div id="ns-date-wrapper" class="w-1/2 h-full "></div>
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
    const nsTitle = new NsTitleComponent(
      this.$target.querySelector('#ns-title-wrapper') as HTMLElement,
    );
    // [리팩토링 예정]
    const nsDate = new NsDateComponent();

    (this.$target.querySelector('#ns-date-wrapper') as HTMLElement).appendChild(
      nsDate.element,
    );
  }
}
