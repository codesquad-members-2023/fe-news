import { Props, State } from '@src/types/types';
import { Component } from '@src/types/interfaces';
import { FooterModel } from '@components/footer/FooterModel.js';
import { FooterView } from '@components/footer/FooterView.js';

export class FooterComponent implements Component {
  private _model: FooterModel;
  private _view: FooterView;
  constructor(props?: Props) {
    this._model = new FooterModel();
    this._view = new FooterView();
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
