import { Component, ObserverViewComponent } from '@custom-types/interfaces';
import { Props, State } from '@custom-types/types';
import { AbstractView } from '@src/types/abstracts.js';
import { NsCategoryContainerObservableModel } from '@components/main/main__left/ns__container/ns__category-container/NsCategoryContainerObsevableModel.js';

export class NsCategoryContainerObserverViewComponent
  extends AbstractView
  implements ObserverViewComponent
{
  _observerModel: NsCategoryContainerObservableModel;
  constructor(props?: Props) {
    super();
    this._observerModel = new NsCategoryContainerObservableModel();
  }

  // setTemplate은 subscriber 처리하면 안된다. 그러면 element가 초기화되어버림.
  setTemplate() {
    this._templateElement.innerHTML = `<section id="category-container" class="px-3 py-3 flex-auto flex flex-row justify-between items-center relative hidden">카테고리 컨테이너</section>`;
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
    this._observerModel.addSubscriber(this.render.bind(this));
  }

  // 아래 메서드들은 subscriber이 된다.
  render(state: State) {
    return;
  }
}
