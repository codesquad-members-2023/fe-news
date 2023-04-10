import { Props, State } from '@src/types/types';
import { Component } from '@src/types/interfaces';
import { NsControllerModel } from '@components/main/main__left/ns__container/ns__controller/NsControllerModel.js';
import { NsControllerView } from '@components/main/main__left/ns__container/ns__controller/NsControllerView.js';

export class NsControllerComponent implements Component {
  private _model: NsControllerModel;
  private _view: NsControllerView;
  constructor(props?: Props) {
    this._model = new NsControllerModel();
    this._view = new NsControllerView();

    const { press, articleTitle } = props!;
    this.setState({ press, articleTitle });
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
