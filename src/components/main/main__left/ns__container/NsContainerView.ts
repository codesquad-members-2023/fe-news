import { Props, State } from '@custom-types/types';
import { TempAbstractView } from '@custom-types/abstracts.js';
import { NsNavbarComponent } from '@components/main/main__left/ns__container/ns__navbar/NsNavbarComponent.js';
import { NsPressContainerComponent } from '@components/main/main__left/ns__container/ns__press-container/NsPressContainerComponent.js';
import { NsCategoryContainerObserverViewComponent } from '@components/main/main__left/ns__container/ns__category-container/NsCategoryContainerObserverViewComponent.js';

export class NsContainerView extends TempAbstractView {
  constructor($target: HTMLElement) {
    super($target);
  }

  template(state: State) {
    return `<section class="h-full flex flex-col justify-start">
              <div id="ns-navbar-wrapper" class="w-full h-12"></div>
              ${
                state.view === 'GRID'
                  ? '<div id="ns-press-container-wrapper" class="p-3 h-full "></div>'
                  : '<div id="ns-category-container-wrapper" class="p-3 h-full "></div>'
              }
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

  addChildren(props: Props) {
    const { view, handleToView, articlesPromise } = props;
    // 처음 컴포넌트 생성 시, state가 전달되지 않았을 때 early return 처리
    if (!view) return;
    const nsNavbar = new NsNavbarComponent(
      this.$target.querySelector('#ns-navbar-wrapper') as HTMLElement,
      props,
    );
    if (view === 'GRID') {
      const nsPressContainer = new NsPressContainerComponent(
        this.$target.querySelector(
          '#ns-press-container-wrapper',
        ) as HTMLElement,
        props,
      );
    }
    if (view === 'LIST') {
      const nsCategoryContainer = new NsCategoryContainerObserverViewComponent(
        props,
      );
      // [리팩토링 예정]
      (
        this.$target.querySelector(
          '#ns-category-container-wrapper',
        ) as HTMLElement
      ).appendChild(nsCategoryContainer.element);
    }
    return;
  }
}
