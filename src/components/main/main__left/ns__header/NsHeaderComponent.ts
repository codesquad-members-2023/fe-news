import { Props, State } from '@custom-types/types';
import { TempComponent } from '@custom-types/interfaces';
import { NsHeaderModel } from '@components/main/main__left/ns__header/NsHeaderModel.js';
import { NsHeaderView } from '@components/main/main__left/ns__header/NsHeaderView.js';

export class NsHeaderComponent implements TempComponent {
  private _model: NsHeaderModel;
  private _view: NsHeaderView;
  $target: HTMLElement;
  constructor(targetElement?: HTMLElement, props?: Props) {
    this.$target = targetElement as HTMLElement;
    this._model = new NsHeaderModel();
    this._view = new NsHeaderView(this.$target);
  }

  get state() {
    return this._model.state;
  }

  private setState(state: State) {
    this._model.setState(state);
    this._view.render(this._model.state);
  }
}
