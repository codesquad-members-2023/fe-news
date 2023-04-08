import { Props, State } from '@utils/types';
import { Component } from '@utils/interfaces';
import { HeaderModel } from '@components/header/HeaderModel.js';
import { HeaderView } from '@components/header/HeaderView.js';

export class HeaderComponent implements Component {
  private _model: HeaderModel;
  private _view: HeaderView;
  constructor(props?: Props) {
    this._model = new HeaderModel();
    this._view = new HeaderView();

    const state = { title: 'Header' };
    this.setState(state);
  }

  setState(state: State) {
    this._model.setState(state);
    this._view.render(this._model.state);
  }

  get state() {
    return this._model.state;
  }

  get element() {
    return this._view.element;
  }
}
