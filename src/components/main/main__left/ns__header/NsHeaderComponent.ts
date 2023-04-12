import { Props, State } from '@src/types/types';
import { Component } from '@src/types/interfaces';
import { NsHeaderModel } from '@components/main/main__left/ns__header/NsHeaderModel.js';
import { NsHeaderView } from '@components/main/main__left/ns__header/NsHeaderView.js';
import { NsTitleComponent } from '@components/main/main__left/ns__header/ns__title/NsTitleComponent.js';
import { NsDateComponent } from '@components/main/main__left/ns__header/ns__date/NsDateComponent.js';

export class NsHeaderComponent implements Component {
  private _model: NsHeaderModel;
  private _view: NsHeaderView;
  constructor(props?: Props) {
    this._model = new NsHeaderModel();
    this._view = new NsHeaderView();

    const nsTitle = new NsTitleComponent();
    const nsDate = new NsDateComponent();
    nsTitle.attachTo(this);
    nsDate.attachTo(this);
  }

  get element() {
    return this._view.element;
  }

  get state() {
    return this._model.state;
  }

  private setState(state: State) {
    this._model.setState(state);
    this._view.render(this._model.state);
  }

  attachTo(component: Component, position: InsertPosition = 'beforeend') {
    component.element.insertAdjacentElement(position, this.element);
  }
}
