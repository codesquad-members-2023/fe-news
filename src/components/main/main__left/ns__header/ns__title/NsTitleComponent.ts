import { Props, State } from '@src/types/types';
import { Component } from '@src/types/interfaces';
import { NsTitleModel } from '@components/main/main__left/ns__header/ns__title/NsTitleModel.js';
import { NsTitleView } from '@components/main/main__left/ns__header/ns__title/NsTitleView.js';

export class NsTitleComponent implements Component {
  private _model: NsTitleModel;
  private _view: NsTitleView;
  constructor(props?: Props) {
    this._model = new NsTitleModel();
    this._view = new NsTitleView();

    const title = '뉴스스탠드';
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
