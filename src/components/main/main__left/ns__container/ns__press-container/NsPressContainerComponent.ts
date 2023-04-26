import { Article, Props, State } from '@custom-types/types';
import { TempComponent } from '@custom-types/interfaces';
import { NsPressContainerModel } from '@components/main/main__left/ns__container/ns__press-container/NsPressContainerModel.js';
import { NsPressContainerView } from '@components/main/main__left/ns__container/ns__press-container/NsPressContainerView.js';
import {
  PRESS_CONTAINER_PAGE_END,
  PRESS_CONTAINER_ITEM_COUNT,
  PRESS_CONTAINER_PAGE_UNIT,
  PRESS_CONTAINER_PAGE_START,
} from '@src/constants/constants.js';
import { pickRandomData } from '@utils/pickRandomData.js';

export class NsPressContainerComponent implements TempComponent {
  private _model: NsPressContainerModel;
  private _view: NsPressContainerView;
  $target: HTMLElement;
  constructor(targetElement?: HTMLElement, props?: Props) {
    this.$target = targetElement as HTMLElement;
    this._model = new NsPressContainerModel();
    this._view = new NsPressContainerView(this.$target);

    const randomArticlesPromise = this.getRandomArticles(
      (props as Props).articlesPromise as Promise<Article[]>,
    );

    this.setInitState({
      randomArticlesPromise,
      page: PRESS_CONTAINER_PAGE_START,
      handleToPrev: this.handleClickToPrev.bind(this),
      handleToNext: this.handleClickToNext.bind(this),
    });
  }

  get state() {
    return this._model.state;
  }

  private setState(state: State) {
    this._model.setState(state);
    this._view.render(this._model.state);
  }

  handleClickToPrev() {
    const page =
      +this.state.page - PRESS_CONTAINER_PAGE_UNIT < PRESS_CONTAINER_PAGE_START
        ? PRESS_CONTAINER_PAGE_START
        : +this.state.page - PRESS_CONTAINER_PAGE_UNIT;
    this.setState({ page });
  }

  handleClickToNext() {
    const page =
      +this.state.page + PRESS_CONTAINER_PAGE_UNIT > PRESS_CONTAINER_PAGE_END
        ? PRESS_CONTAINER_PAGE_END
        : +this.state.page + PRESS_CONTAINER_PAGE_UNIT;
    if (page === PRESS_CONTAINER_PAGE_END) return;
    this.setState({ page });
  }

  async getRandomArticles(articlesPromise: Promise<Article[]>) {
    const articleData = await articlesPromise;
    const totalItemCount =
      PRESS_CONTAINER_PAGE_END * PRESS_CONTAINER_ITEM_COUNT;
    return pickRandomData(articleData, totalItemCount);
  }

  async setInitState({
    randomArticlesPromise,
    page,
    handleToPrev,
    handleToNext,
  }: {
    randomArticlesPromise: Promise<Article[]>;
    page: number;
    handleToPrev: (e: Event, state: State) => void;
    handleToNext: (e: Event, state: State) => void;
  }) {
    const articles = await randomArticlesPromise;
    this.setState({ articles, page, handleToPrev, handleToNext });
  }
}
