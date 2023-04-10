import { Props, State } from '@src/types/types';
import { Component } from '@src/types/interfaces';
import { NavbarRightModel } from '@components/main/main__left/ns__container/ns__navbar/navbar__right/NavbarRightModel.js';
import { NavbarRightView } from '@components/main/main__left/ns__container/ns__navbar/navbar__right/NavbarRightView.js';

export class NavbarRightComponent implements Component {
  private _model: NavbarRightModel;
  private _view: NavbarRightView;
  constructor(props?: Props) {
    this._model = new NavbarRightModel();
    this._view = new NavbarRightView();

    const isGrid = true;
  }

  get element() {
    return this._view.element;
  }

  private setState(state: State) {
    this._model.setState(state);
    this._view.render(this._model.state);
  }

  attachTo(component: Component, position: InsertPosition = 'beforeend') {
    component.element.insertAdjacentElement(position, this.element);
  }
}
