import { Props, State } from '@src/types/types';
import { Component } from '@src/types/interfaces';
import { NsDateModel } from '@components/main/main__left/ns__header/ns__date/NsDateModel.js';
import { NsDateView } from '@components/main/main__left/ns__header/ns__date/NsDateView.js';
import { getKrDate } from '@utils/date.js';

export class NsDateComponent implements Component {
  private _model: NsDateModel;
  private _view: NsDateView;
  constructor(props?: Props) {
    this._model = new NsDateModel();
    this._view = new NsDateView();

    const date = getKrDate('ko-KR');
    this.setState({ date });
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
