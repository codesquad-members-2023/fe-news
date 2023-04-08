import { Props, State } from '@utils/types';
import { Component } from '@utils/interfaces';
import { MainLeftModel } from '@components/main/Main__left/MainLeftModel.js';
import { MainLeftView } from '@components/main/Main__left/MainLeftView.js';

export class MainLeftComponent implements Component {
  private _model: MainLeftModel;
  private _view: MainLeftView;
  constructor(props?: Props) {
    this._model = new MainLeftModel();
    this._view = new MainLeftView();
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
