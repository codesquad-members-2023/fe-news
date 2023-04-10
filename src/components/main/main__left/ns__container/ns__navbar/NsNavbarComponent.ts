import { Props, State } from '@src/types/types';
import { Component } from '@src/types/interfaces';
import { NsNavbarModel } from '@components/main/main__left/ns__container/ns__navbar/NsNavbarModel.js';
import { NsNavbarView } from '@components/main/main__left/ns__container/ns__navbar/NsNavbarView.js';

export class NsNavbarComponent implements Component {
  private _model: NsNavbarModel;
  private _view: NsNavbarView;
  constructor(props?: Props) {
    this._model = new NsNavbarModel();
    this._view = new NsNavbarView();
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
