import { Props, State } from '@utils/types';
import { Component } from '@utils/interfaces';
import { MainModel } from '@components/main/MainModel.js';
import { MainView } from '@components/main/MainView.js';
import { MainRightComponent } from '@components/main/Main__right/MainRightComponent.js';

export class MainComponent implements Component {
  private _model: MainModel;
  private _view: MainView;
  constructor(props?: Props) {
    this._model = new MainModel();
    this._view = new MainView();

    const state = {};
    this.setState(state);

    const mainRight = new MainRightComponent();
    this.element.appendChild(mainRight.element);
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
