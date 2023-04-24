import { Props, State } from '@custom-types/types';
import { TempComponent } from '@custom-types/interfaces';
import { MainLeftModel } from '@components/main/main__left/MainLeftModel.js';
import { MainLeftView } from '@components/main/main__left/MainLeftView.js';

export class MainLeftComponent implements TempComponent {
  private _model: MainLeftModel;
  private _view: MainLeftView;
  $target: HTMLElement;
  constructor(targetElement?: HTMLElement, props?: Props) {
    this.$target = targetElement as HTMLElement;
    this._model = new MainLeftModel();
    this._view = new MainLeftView(this.$target);
  }

  get state() {
    return this._model.state;
  }

  private setState(state: State) {
    this._model.setState(state);
    this._view.render(this._model.state);
  }
}
