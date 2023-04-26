import { Props, State } from '@custom-types/types';
import { TempComponent } from '@custom-types/interfaces';
import { NsArticleContainerModel } from '@components/main/main__left/ns__container/ns__category-container/ns__article-container/NsArticleContainerModel.js';
import { NsArticleContainerView } from '@components/main/main__left/ns__container/ns__category-container/ns__article-container/NsArticleContainerView.js';

export class NsArticleContainerComponent implements TempComponent {
  private _model: NsArticleContainerModel;
  private _view: NsArticleContainerView;
  $target: HTMLElement;
  constructor($target?: HTMLElement, props?: Props) {
    this.$target = $target as HTMLElement;
    this._model = new NsArticleContainerModel();
    this._view = new NsArticleContainerView(this.$target);

    this.setState(props as Props);
  }

  get state() {
    return this._model.state;
  }

  private setState(state: State) {
    this._model.setState(state);
    this._view.render(this._model.state);
  }
}
