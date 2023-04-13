import { Props, State } from '@src/types/types';
import { Component } from '@src/types/interfaces';
import { HeaderModel } from '@components/header/HeaderModel.js';
import { HeaderView } from '@components/header/HeaderView.js';

export class HeaderComponent implements Component {
  private _model: HeaderModel;
  private _view: HeaderView;
  constructor(props?: Props) {
    this._model = new HeaderModel();
    this._view = new HeaderView();
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
}
