import { Props, State } from '@custom-types/types';
import { TempComponent } from '@custom-types/interfaces';
import { NsNavbarModel } from '@components/main/main__left/ns__container/ns__navbar/NsNavbarModel.js';
import { NsNavbarView } from '@components/main/main__left/ns__container/ns__navbar/NsNavbarView.js';

export class NsNavbarComponent implements TempComponent {
  private _model: NsNavbarModel;
  private _view: NsNavbarView;
  $target: HTMLElement;
  constructor(targetElement?: HTMLElement, props?: Props) {
    this.$target = targetElement as HTMLElement;
    this._model = new NsNavbarModel();
    this._view = new NsNavbarView(this.$target);
  }

  get state() {
    return this._model.state;
  }

  private setState(state: State) {
    this._model.setState(state);
    this._view.render(this._model.state);
  }
}
