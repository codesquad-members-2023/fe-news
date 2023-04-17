import { Component, ObserverViewComponent } from '@custom-types/interfaces';
import { Article, Props, State } from '@custom-types/types';
import { AbstractView } from '@src/types/abstracts.js';
import { NsCategoryNavbarObservableModel } from '@components/main/main__left/ns__container/ns__category-container/ns__category-navbar/NsCategoryNavbarObservableModel.js';
import { $ } from '@utils/dom.js';
export class NsCategoryNavbarObserverViewComponent
  extends AbstractView
  implements ObserverViewComponent
{
  _observerModel: NsCategoryNavbarObservableModel;
  constructor(props?: Props) {
    super();
    this._observerModel = new NsCategoryNavbarObservableModel();

    this.setState(props!);
  }

  // setTemplate은 subscriber 처리하면 안된다. 그러면 element가 초기화되어버림.
  setTemplate() {
    this._templateElement.innerHTML = `<ul id="category-navbar" class="px-3 w-full h-10 flex flex-row justify-start items-center bg-gray-100 text-sm text-gray-500 border border-gray-200 gap-x-8">
                                         
                                       </ul>`;
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
    this._observerModel.addSubscriber(this.addCategoryList.bind(this));
  }

  // 아래 메서드들은 subscriber이 된다.
  async addCategoryList(state: State) {
    const { articlesPromise } = state;
    const articles = (await articlesPromise) as Article[];
    const categories = articles.map((article) => {
      return article.mediaInfo.type;
    });

    const categorySet = new Set(categories);
    this.element.innerHTML = [...categorySet].reduce((acc, cur) => {
      return acc + `<li>${cur}</li>`;
    }, '');
  }
}
