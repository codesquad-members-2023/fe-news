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

export class NsPressPressContainerComponent implements Component {
  private _model: NsPressContainerModel;
  private _view: NsPressContainerView;
  constructor(props?: Props) {
    this._model = new NsPressContainerModel();
    this._view = new NsPressContainerView();

    this.setRandomArticleState();
  }

  get element() {
    return this._view.element;
  }

  setState(state: State) {
    this._model.setState(state);
    this._view.render(this._model.state);
  }

  attachTo(component: Component, position: InsertPosition = 'beforeend') {
    component.element.insertAdjacentElement(position, this.element);
  }

  async getArticleData(): Promise<Article[]> {
    const articleData = await customGet(`${BASIC_URL}/articles`).then((res) =>
      res.json(),
    );
    return articleData;
  }

  async getRandomArticleData(
    gridContainerCount: number,
    gridItemCount: number,
  ) {
    const articleData = await this.getArticleData();
    const totalItemCount = gridContainerCount * gridItemCount;
    return pickRandomData(articleData, totalItemCount);
  }

  async setRandomArticleState() {
    const randomArticles = await this.getRandomArticleData(
      PRESS_GRID_CONTAINER_COUNT,
      PRESS_GRID_ITEM_COUNT,
    );
    this.setState({ randomArticles });
  }
}
