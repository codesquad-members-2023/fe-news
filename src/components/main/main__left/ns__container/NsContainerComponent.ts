import { Article, Props, State, ViewState } from '@custom-types/types';
import { Component } from '@custom-types/interfaces';
import { NsContainerModel } from '@components/main/main__left/ns__container/NsContainerModel.js';
import { NsContainerView } from '@components/main/main__left/ns__container/NsContainerView.js';
import { NsNavbarComponent } from '@components/main/main__left/ns__container/ns__navbar/NsNavbarComponent.js';
import { NsPressContainerComponent } from '@components/main/main__left/ns__container/ns__press-container/NsPressContainerComponent.js';
import { NsCategoryContainerObserverViewComponent } from '@components/main/main__left/ns__container/ns__category-container/NsCategoryContainerObserverViewComponent.js';
import { customGet } from '@utils/customFetch.js';
import { BASIC_URL } from '@src/constants/constants.js';

export class NsContainerComponent implements Component {
  private _model: NsContainerModel;
  private _view: NsContainerView;
  constructor(props?: Props) {
    this._model = new NsContainerModel();
    this._view = new NsContainerView();
    // props 전달부터 하기
    const articlesPromise = this.getArticles();
    const view: ViewState = 'GRID'; // Category container 작업 중... 잠깐 LIST로 두기
    const handleToView = this.handleToView.bind(this);
    this.attachChildComponents({ articlesPromise, handleToView });
    // props 전달 후에 setState
    this.setState({ view });
  }

  get element() {
    return this._view.element;
  }

  get state() {
    return this._model.state;
  }

  setState(state: State) {
    this._model.setState(state);
    this._view.render(this._model.state);
  }

  attachTo(component: Component, position: InsertPosition = 'beforeend') {
    component.element.insertAdjacentElement(position, this.element);
  }

  attachChildComponents(props?: Props) {
    const nsNavbar = new NsNavbarComponent(props);
    const nsPressContainer = new NsPressContainerComponent(props);
    const nsCategoryContainer = new NsCategoryContainerObserverViewComponent(
      props,
    );

    nsNavbar.attachTo(this);
    nsPressContainer.attachTo(this);
    nsCategoryContainer.attachTo(this);
  }

  handleToView(state: State) {
    const { view } = state;
    this.setState({ view });
  }

  async getArticles(): Promise<Article[]> {
    const articleData = await customGet(`${BASIC_URL}/articles`).then((res) =>
      res.json(),
    );
    return articleData;
  }
}
