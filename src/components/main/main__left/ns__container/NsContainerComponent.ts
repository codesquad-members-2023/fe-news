import { Article, Props, State, ViewState } from '@custom-types/types';
import { Component } from '@custom-types/interfaces';
import { NsContainerModel } from '@components/main/main__left/ns__container/NsContainerModel.js';
import { NsContainerView } from '@components/main/main__left/ns__container/NsContainerView.js';
import { NsNavbarComponent } from '@components/main/main__left/ns__container/ns__navbar/NsNavbarComponent.js';
import { NsPressContainerComponent } from '@components/main/main__left/ns__container/ns__press-container/NsPressContainerComponent.js';
import { NsCategoryContainerObserverViewComponent } from '@components/main/main__left/ns__container/ns__category-container/NsCategoryContainerObserverViewComponent.js';
import { customGet } from '@utils/customFetch.js';
import {
  BASIC_URL,
  PRESS_CONTAINER_ITEM_COUNT,
  PRESS_CONTAINER_PAGE_END,
} from '@src/constants/constants.js';
import { pickRandomData } from '@utils/pickRandomData.js';

export class NsContainerComponent implements Component {
  private _model: NsContainerModel;
  private _view: NsContainerView;
  constructor(props?: Props) {
    this._model = new NsContainerModel();
    this._view = new NsContainerView();
    // props 처리부터 해서 child component attach하기
    const articlesPromise = this.getRandomArticles();
    this.attachChildComponents({ articlesPromise });

    const view: ViewState = 'GRID';
    const handleToView = this.handleToView.bind(this);
    this.setState({ view, handleToView });
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
    const nsNavbar = new NsNavbarComponent();
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

  async getRandomArticles() {
    const articleData = await this.getArticles();
    const totalItemCount =
      PRESS_CONTAINER_PAGE_END * PRESS_CONTAINER_ITEM_COUNT;
    return pickRandomData(articleData, totalItemCount);
  }
}
