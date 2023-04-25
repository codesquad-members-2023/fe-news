import { Props, State } from '@custom-types/types';
import { TempAbstractView } from '@custom-types/abstracts.js';
import { NavbarLeftComponent } from '@components/main/main__left/ns__container/ns__navbar/navbar__left/NavbarLeftComponent.js';
import { NavbarRightComponent } from '@components/main/main__left/ns__container/ns__navbar/navbar__right/NavbarRightComponent.js';
import { $ } from '@utils/dom.js';

export class NsNavbarView extends TempAbstractView {
  constructor($target: HTMLElement) {
    super($target);
  }

  template(state: State) {
    return `<nav class="h-full flex flex-row items-center">
              <div id="navbar-left-wrapper" class="w-1/2"></div>
              <div id="navbar-right-wrapper" class="w-1/2"></div>
            </nav>`;
  }

  render(state: State) {
    this.$target.innerHTML = this.template(state);
    this.addChildren(state);
    this.setEvents(state);
  }

  setEvents(state: State) {
    return;
  }

  addChildren(props: Props) {
    const navbarLeft = new NavbarLeftComponent(
      $('#navbar-left-wrapper', this.$target) as HTMLElement,
    );
    const navbarRight = new NavbarRightComponent(
      $('#navbar-right-wrapper', this.$target) as HTMLElement,
      props,
    );
  }
}
