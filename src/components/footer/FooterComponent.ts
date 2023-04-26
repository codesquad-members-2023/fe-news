import { Props, State } from '@custom-types/types';
import { TempComponent } from '@custom-types/interfaces';
import { FooterModel } from '@components/footer/FooterModel.js';
import { FooterView } from '@components/footer/FooterView.js';

export class FooterComponent implements TempComponent {
  private _model: FooterModel;
  private _view: FooterView;
  $target: HTMLElement;
  constructor(targetElement?: HTMLElement, props?: Props) {
    this.$target = targetElement as HTMLElement;
    this._model = new FooterModel();
    this._view = new FooterView(this.$target);
  }

  get state() {
    return this._model.state;
  }

  private setState(state: State) {
    this._model.setState(state);
    this._view.render(this._model.state);
  }
}
