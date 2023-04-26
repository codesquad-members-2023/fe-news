import { Props, State } from '@custom-types/types';
import { TempComponent } from '@custom-types/interfaces';
import { MainRightModel } from '@components/main/main__right/MainRightModel.js';
import { MainRightView } from '@components/main/main__right/MainRightView.js';

export class MainRightComponent implements TempComponent {
  private _model: MainRightModel;
  private _view: MainRightView;
  $target: HTMLElement;
  constructor(targetElement?: HTMLElement, props?: Props) {
    this.$target = targetElement as HTMLElement;
    this._model = new MainRightModel();
    this._view = new MainRightView(this.$target);
  }

  get state() {
    return this._model.state;
  }

  private setState(state: State) {
    this._model.setState(state);
    this._view.render(this._model.state);
  }
}
