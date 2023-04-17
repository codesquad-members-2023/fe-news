import { Component, ObserverViewComponent } from '@custom-types/interfaces';
import { Props, State } from '@custom-types/types';
import { AbstractView } from '@src/types/abstracts.js';
import { NsCategoryContainerObservableModel } from '@components/main/main__left/ns__container/ns__category-container/NsCategoryContainerObsevableModel.js';
import { NsCategoryNavbarObserverViewComponent } from '@components/main/main__left/ns__container/ns__category-container/ns__category-navbar/NsCategoryNavbarObserverViewComponent.js';

export class NsCategoryContainerObserverViewComponent
  extends AbstractView
  implements ObserverViewComponent
{
  _observerModel: NsCategoryContainerObservableModel;
  constructor(props?: Props) {
    super();
    this._observerModel = new NsCategoryContainerObservableModel();

    const nsCategoryNavbar = new NsCategoryNavbarObserverViewComponent(props);
    nsCategoryNavbar.attachTo(this);
    this.setState(props!);
  }

  // setTemplate은 subscriber 처리하면 안된다. 그러면 element가 초기화되어버림.
  setTemplate() {
    this._templateElement.innerHTML = `<section id="category-container" class="p-3 h-full flex flex-col justify-between relative">
                                         <button id="btn-prev" class="absolute left-0 top-1/2 border rounded-full bg-white drop-shadow-very-xl">
                                           <img src="/public/images/symbols/chevron-left.svg" alt="chevron-left" class="h-6 w-6"/>
                                         </button>                                     
                                         <button id="btn-next" class="absolute right-0 top-1/2 border rounded-full bg-white drop-shadow-very-xl">
                                           <img src="/public/images/symbols/chevron-right.svg" alt="chevron-right" class="h-6 w-6"/>
                                         </button>
                                       </section>`;
  }

  get state() {
    return this._observerModel.state;
  }

  private setState(state: State) {
    this.subscribe();
    this._observerModel.setState(state);
  }

  attachTo(component: Component, position: InsertPosition = 'beforeend') {
    component.element.insertAdjacentElement(position, this.element);
  }

  subscribe() {
    this._observerModel.addSubscriber(() => {
      return;
    });
  }

  // 아래는 subscriber이 될 메서드
}
