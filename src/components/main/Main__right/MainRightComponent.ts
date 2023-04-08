import { Props, State } from '@utils/types';
import { Component } from '@utils/interfaces';
import { MainRightModel } from '@components/main/Main__right/MainRightModel.js';
import { MainRightView } from '@components/main/Main__right/MainRightView.js';

export class MainRightComponent implements Component {
  private _model: MainRightModel;
  private _view: MainRightView;
  constructor(props?: Props) {
    this._model = new MainRightModel();
    this._view = new MainRightView();

    const state = { title: 'MainRight' };
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
