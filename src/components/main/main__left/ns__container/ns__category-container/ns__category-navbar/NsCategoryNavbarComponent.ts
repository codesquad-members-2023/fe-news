import { Article, Props, State } from '@custom-types/types';
import { TempComponent } from '@custom-types/interfaces';
import { NsCategoryNavbarView } from '@components/main/main__left/ns__container/ns__category-container/ns__category-navbar/NsCategoryNavbarView.js';
import { NsCategoryNavbarModel } from '@components/main/main__left/ns__container/ns__category-container/ns__category-navbar/NsCategoryNavbarModel.js';

export class NsCategoryNavbarComponent implements TempComponent {
  private _model: NsCategoryNavbarModel;
  private _view: NsCategoryNavbarView;
  $target: HTMLElement;
  constructor($target?: HTMLElement, props?: Props) {
    this.$target = $target as HTMLElement;
    this._model = new NsCategoryNavbarModel();
    this._view = new NsCategoryNavbarView(this.$target);

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
