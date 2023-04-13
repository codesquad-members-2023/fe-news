import { Article, Props, State } from '@src/types/types';
import { Component } from '@src/types/interfaces';
import { NsPressContainerModel } from '@components/main/main__left/ns__container/ns__press-container/NsPressContainerModel.js';
import { NsPressContainerView } from '@components/main/main__left/ns__container/ns__press-container/NsPressContainerView.js';
import { customGet } from '@utils/customFetch.js';
import {
  BASIC_URL,
  PRESS_GRID_CONTAINER_COUNT,
  PRESS_GRID_ITEM_COUNT,
} from '@src/constants/constants.js';
import { pickRandomData } from '@utils/pickRandomData.js';

export class NsPressContainerComponent implements Component {
  private _model: NsPressContainerModel;
  private _view: NsPressContainerView;
  constructor(props?: Props) {
    this._model = new NsPressContainerModel();
    this._view = new NsPressContainerView();

    this.setInitState({
      articlesPromise: this.getRandomArticles(),
      page: 0,
      handleToPrev: this.handleToPrev.bind(this),
      handleToNext: this.handleToNext.bind(this),
    });
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

  async getArticles(): Promise<Article[]> {
    const articleData = await customGet(`${BASIC_URL}/articles`).then((res) =>
      res.json(),
    );
    return articleData;
  }

  async getRandomArticles() {
    const articleData = await this.getArticles();
    const totalItemCount = PRESS_GRID_CONTAINER_COUNT * PRESS_GRID_ITEM_COUNT;
    return pickRandomData(articleData, totalItemCount);
  }

  async setInitState({
    articlesPromise,
    page,
    handleToPrev,
    handleToNext,
  }: {
    articlesPromise: Promise<Article[]>;
    page: number;
    handleToPrev: (e: Event, state: State) => void;
    handleToNext: (e: Event, state: State) => void;
  }) {
    const articles = await articlesPromise;
    this.setState({ articles, page, handleToPrev, handleToNext });
  }

  handleToPrev() {
    const page = +this.state.page - 1 < 0 ? 0 : +this.state.page - 1;
    this.setState({ page });
  }

  handleToNext() {
    const page =
      +this.state.page + 1 > PRESS_GRID_CONTAINER_COUNT
        ? PRESS_GRID_CONTAINER_COUNT
        : +this.state.page + 1;
    if (page === PRESS_GRID_CONTAINER_COUNT) return;
    this.setState({ page });
  }
}
