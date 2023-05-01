import { Article, Props, State } from '@custom-types/types';
import { TempComponent } from '@custom-types/interfaces';
import { NsCategoryContainerModel } from '@components/main/main__left/ns__container/ns__category-container/NsCategoryContainerModel.js';
import { NsCategoryContainerView } from '@components/main/main__left/ns__container/ns__category-container/NsCategoryContainerView.js';

export class NsCategoryContainerComponent implements TempComponent {
  private _model: NsCategoryContainerModel;
  private _view: NsCategoryContainerView;
  $target: HTMLElement;
  constructor($target?: HTMLElement, props?: Props) {
    this.$target = $target as HTMLElement;
    this._model = new NsCategoryContainerModel();
    this._view = new NsCategoryContainerView(this.$target);

    this.setState({
      ...props,
      page: 0,
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
    let page = this.state.page as number;
    if (page <= 0) return;
    this.setState({ page: --page });
  }

  async handleClickToNext() {
    const articles = (await this.state.articlesPromise) as Array<Article>;
    let page = this.state.page as number;
    if (page >= articles?.length - 1) return;
    this.setState({ page: ++page });
  }
}
