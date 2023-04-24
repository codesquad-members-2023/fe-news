import { Props, State } from '@custom-types/types';
import { TempComponent } from '@custom-types/interfaces';
import { MainModel } from '@components/main/MainModel.js';
import { MainView } from '@components/main/MainView.js';

export class MainComponent implements TempComponent {
  private _model: MainModel;
  private _view: MainView;
  $target: HTMLElement;
  constructor(targetElement?: HTMLElement, props?: Props) {
    this.$target = targetElement as HTMLElement;
    this._model = new MainModel();
    this._view = new MainView(this.$target);
  }

  get state() {
    return this._model.state;
  }

  private setState(state: State) {
    this._model.setState(state);
    this._view.render(this._model.state);
  }
}
