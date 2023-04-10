import { Props, State } from '@src/types/types';
import { Component } from '@src/types/interfaces';
import { NavbarLeftModel } from '@components/main/main__left/ns__container/ns__navbar/navbar__left/NavbarLeftModel.js';
import { NavbarLeftView } from '@components/main/main__left/ns__container/ns__navbar/navbar__left/NavbarLeftView.js';

export class NavbarLeftComponent implements Component {
  private _model: NavbarLeftModel;
  private _view: NavbarLeftView;
  constructor(props?: Props) {
    this._model = new NavbarLeftModel();
    this._view = new NavbarLeftView();

    const isTotal = true;
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
