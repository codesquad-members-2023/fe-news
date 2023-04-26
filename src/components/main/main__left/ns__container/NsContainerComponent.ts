import { Article, Props, State, ViewState } from '@custom-types/types';
import { TempComponent } from '@custom-types/interfaces';
import { NsContainerModel } from '@components/main/main__left/ns__container/NsContainerModel.js';
import { NsContainerView } from '@components/main/main__left/ns__container/NsContainerView.js';
import { customGet } from '@utils/customFetch.js';
import { BASIC_URL } from '@src/constants/constants.js';

export class NsContainerComponent implements TempComponent {
  private _model: NsContainerModel;
  private _view: NsContainerView;
  $target: HTMLElement;
  constructor(targetElement?: HTMLElement, props?: Props) {
    this.$target = targetElement as HTMLElement;
    this._model = new NsContainerModel();
    this._view = new NsContainerView(this.$target);

    const view: ViewState = 'GRID';
    this.setState({
      view,
      handleToView: this.handleToView.bind(this),
      articlesPromise: this.getArticles(),
    });
  }

  get state() {
    return this._model.state;
  }

  private setState(state: State) {
    this._model.setState(state);
    this._view.render(this._model.state);
  }

  async getArticles(): Promise<Article[]> {
    const articleData = await customGet(`${BASIC_URL}/articles`).then((res) =>
      res.json(),
    );
    return articleData;
  }

  handleToView(state: State) {
    const { view } = state;
    this.setState({ view });
  }
}
