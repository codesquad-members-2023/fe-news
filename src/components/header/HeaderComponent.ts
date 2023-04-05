import { Props, State, Component } from '../../utils/types';
import { HeaderModel } from './HeaderModel.js';
import { HeaderView } from './HeaderView.js';

export class HeaderComponent implements Component {
  private _element: HTMLElement;
  private _model: HeaderModel;
  private _view: HeaderView;
  constructor(props?: Props) {
    this._model = new HeaderModel();
    this._view = new HeaderView();
    this._element = this._view.element;

    const state = { title: '헤더입니다.' };
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
