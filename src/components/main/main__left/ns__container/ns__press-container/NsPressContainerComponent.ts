import { Props, State } from '@src/types/types';
import { Component } from '@src/types/interfaces';
import { NsPressContainerModel } from '@components/main/main__left/ns__container/ns__press-container/NsPressContainerModel.js';
import { NsPressContainerView } from '@components/main/main__left/ns__container/ns__press-container/NsPressContainerView.js';

export class NsPressPressContainerComponent implements Component {
  private _model: NsPressContainerModel;
  private _view: NsPressContainerView;
  constructor(props?: Props) {
    this._model = new NsPressContainerModel();
    this._view = new NsPressContainerView();
  }

  get element() {
    return this._view.element;
  }

  setState(state: State) {
    this._model.setState(state);
    this._view.render(this._model.state);
  }

  attachTo(component: Component, position: InsertPosition = 'beforeend') {
    component.element.insertAdjacentElement(position, this.element);
  }
}
