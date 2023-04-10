import { Props, State } from '@src/types/types';
import { Component } from '@src/types/interfaces';
import { NsContainerModel } from '@components/main/main__left/ns__container/NsContainerModel.js';
import { NsContainerView } from '@components/main/main__left/ns__container/NsContainerView.js';
import { NsNavbarComponent } from '@components/main/main__left/ns__container/ns__navbar/NsNavbarComponent.js';

export class NsContainerComponent implements Component {
  private _model: NsContainerModel;
  private _view: NsContainerView;
  constructor(props?: Props) {
    this._model = new NsContainerModel();
    this._view = new NsContainerView();

    const nsNavbar = new NsNavbarComponent();
    nsNavbar.attachTo(this);
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
