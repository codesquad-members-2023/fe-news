import { Component, ObserverViewComponent } from '@custom-types/interfaces';
import { Article, Props, State } from '@custom-types/types';
import { AbstractView } from '@src/types/abstracts.js';
import { NsArticleContainerObservableModel } from '@components/main/main__left/ns__container/ns__category-container/ns__article-container/NsArticleContainerObservableModel.js';

export class NsArticleContainerObserverViewComponent
  extends AbstractView
  implements ObserverViewComponent
{
  _observerModel: NsArticleContainerObservableModel;
  constructor(props?: Props) {
    super();
    this._observerModel = new NsArticleContainerObservableModel();

    this.setState(props!);
  }

  // setTemplate은 subscriber 처리하면 안된다. 그러면 element가 초기화되어버림.
  setWrapper() {
    this._wrapperElement.innerHTML = `<section id="article-container" class="p-3 w-full h-full flex flex-col justify-start items-start text-sm border border-blue-500">
                                         <div id="article-header" class="flex flex-row justify-start items-center gap-x-4">
                                         </div>
                                         <div id="articles" class="p-3 w-full h-full flex flex-row">
                                           <div id="main-article" class="w-1/3 h-full flex flex-col gap-y-1"></div>
                                           <ul id="sub-articles" class="w-2/3 h-full flex flex-col justify-between"></ul>
                                         </div>
                                       </section>`;
  }

  get state() {
    return this._observerModel.state;
  }

  setState(state: State) {
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

  // 아래 메서드들은 subscriber이 된다.
}
