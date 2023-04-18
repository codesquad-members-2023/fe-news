import { Props, State } from '@custom-types/types';
import { Component } from '@custom-types/interfaces';
import { NavbarRightModel } from '@components/main/main__left/ns__container/ns__navbar/navbar__right/NavbarRightModel.js';
import { NavbarRightView } from '@components/main/main__left/ns__container/ns__navbar/navbar__right/NavbarRightView.js';
import { $ } from '@utils/dom.js';

export class NavbarRightComponent implements Component {
  private _model: NavbarRightModel;
  private _view: NavbarRightView;
  constructor(props?: Props) {
    this._model = new NavbarRightModel();
    this._view = new NavbarRightView();

    const handleListBtn = this.handleListBtn.bind(this);
    const handleGridBtn = this.handleGridBtn.bind(this);
    this.setState({ ...props, handleListBtn, handleGridBtn });
  }

  get element() {
    return this._view.element;
  }

  get state() {
    return this._model.state;
  }

  private setState(state: State) {
    this._model.setState(state);
    this._view.render(this._model.state);
  }

  attachTo(component: Component, position: InsertPosition = 'beforeend') {
    component.element.insertAdjacentElement(position, this.element);
  }

  handleListBtn() {
    ($('#list-btn', this.element) as HTMLButtonElement).classList.add(
      'bg-list-on',
    );
    ($('#list-btn', this.element) as HTMLButtonElement).classList.remove(
      'bg-list-off',
    );
    ($('#grid-btn', this.element) as HTMLButtonElement).classList.add(
      'bg-grid-off',
    );
    ($('#grid-btn', this.element) as HTMLButtonElement).classList.remove(
      'bg-grid-on',
    );
  }

  handleGridBtn() {
    ($('#grid-btn', this.element) as HTMLButtonElement).classList.add(
      'bg-grid-on',
    );
    ($('#grid-btn', this.element) as HTMLButtonElement).classList.remove(
      'bg-grid-off',
    );
    ($('#list-btn', this.element) as HTMLButtonElement).classList.add(
      'bg-list-off',
    );
    ($('#list-btn', this.element) as HTMLButtonElement).classList.remove(
      'bg-list-on',
    );
  }
}
