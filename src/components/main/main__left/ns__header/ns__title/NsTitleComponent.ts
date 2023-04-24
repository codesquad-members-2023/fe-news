import { Props, State } from '@custom-types/types';
import { TempComponent } from '@custom-types/interfaces';
import { NsTitleModel } from '@components/main/main__left/ns__header/ns__title/NsTitleModel.js';
import { NsTitleView } from '@components/main/main__left/ns__header/ns__title/NsTitleView.js';

export class NsTitleComponent implements TempComponent {
  private _model: NsTitleModel;
  private _view: NsTitleView;
  $target: HTMLElement;
  constructor(targetElement?: HTMLElement, props?: Props) {
    this.$target = targetElement as HTMLElement;
    this._model = new NsTitleModel();
    this._view = new NsTitleView(this.$target);
  }

  get state() {
    return this._model.state;
  }

  private setState(state: State) {
    this._model.setState(state);
    this._view.render(this._model.state);
  }
}
