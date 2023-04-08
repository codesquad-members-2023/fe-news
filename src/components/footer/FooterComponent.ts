import { Props, State } from '@utils/types';
import { Component } from '@utils/interfaces';
import { FooterModel } from '@components/footer/FooterModel.js';
import { FooterView } from '@components/footer/FooterView.js';

export class FooterComponent implements Component {
  private _model: FooterModel;
  private _view: FooterView;
  constructor(props?: Props) {
    this._model = new FooterModel();
    this._view = new FooterView();

    const title = 'Footer';
    this.setState({ title });
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
