import { Props, State } from '@custom-types/types';
import { TempComponent } from '@custom-types/interfaces';
import { NavbarRightModel } from '@components/main/main__left/ns__container/ns__navbar/navbar__right/NavbarRightModel.js';
import { NavbarRightView } from '@components/main/main__left/ns__container/ns__navbar/navbar__right/NavbarRightView.js';
import { $ } from '@utils/dom.js';

export class NavbarRightComponent implements TempComponent {
  private _model: NavbarRightModel;
  private _view: NavbarRightView;
  $target: HTMLElement;
  constructor(targetElement?: HTMLElement, props?: Props) {
    this.$target = targetElement as HTMLElement;
    this._model = new NavbarRightModel();
    this._view = new NavbarRightView(this.$target);

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
