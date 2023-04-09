import { Props, State } from '@src/types/types';
import { Component } from '@src/types/interfaces';
import { NsHeaderModel } from '@components/main/main__left/ns__header/NsHeaderModel.js';
import { NsHeaderView } from '@components/main/main__left/ns__header/NsHeaderView.js';

export class NsHeaderComponent implements Component {
  private _model: NsHeaderModel;
  private _view: NsHeaderView;
  constructor(props?: Props) {
    this._model = new NsHeaderModel();
    this._view = new NsHeaderView();
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
