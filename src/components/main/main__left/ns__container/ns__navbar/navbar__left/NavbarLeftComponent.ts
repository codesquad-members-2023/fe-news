import { Props, State } from '@custom-types/types';
import { TempComponent } from '@custom-types/interfaces';
import { NavbarLeftModel } from '@components/main/main__left/ns__container/ns__navbar/navbar__left/NavbarLeftModel.js';
import { NavbarLeftView } from '@components/main/main__left/ns__container/ns__navbar/navbar__left/NavbarLeftView.js';

export class NavbarLeftComponent implements TempComponent {
  private _model: NavbarLeftModel;
  private _view: NavbarLeftView;
  $target: HTMLElement;
  constructor(targetElement?: HTMLElement, props?: Props) {
    this.$target = targetElement as HTMLElement;
    this._model = new NavbarLeftModel();
    this._view = new NavbarLeftView(this.$target);
  }

  get state() {
    return this._model.state;
  }

  private setState(state: State) {
    this._model.setState(state);
    this._view.render(this._model.state);
  }
}
