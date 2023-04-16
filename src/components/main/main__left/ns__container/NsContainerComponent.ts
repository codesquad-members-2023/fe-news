import { Props, State, ViewState } from '@custom-types/types';
import { Component } from '@custom-types/interfaces';
import { NsContainerModel } from '@components/main/main__left/ns__container/NsContainerModel.js';
import { NsContainerView } from '@components/main/main__left/ns__container/NsContainerView.js';
import { NsNavbarComponent } from '@components/main/main__left/ns__container/ns__navbar/NsNavbarComponent.js';
import { NsPressContainerComponent } from '@components/main/main__left/ns__container/ns__press-container/NsPressContainerComponent.js';
import { NsCategoryContainerObserverViewComponent } from '@components/main/main__left/ns__container/ns__category-container/NsCategoryContainerObserverViewComponent.js';

export class NsContainerComponent implements Component {
  private _model: NsContainerModel;
  private _view: NsContainerView;
  constructor(props?: Props) {
    this._model = new NsContainerModel();
    this._view = new NsContainerView();
    this.attachChildComponents();

    const view: ViewState = 'GRID';
    const handleToView = this.handleToView.bind(this);
    this.setState({ view, handleToView });
  }

  get element() {
    return this._view.element;
  }

  get state() {
    return this._model.state;
  }

  setState(state: State) {
    this._model.setState(state);
    this._view.render(this._model.state);
  }

  attachTo(component: Component, position: InsertPosition = 'beforeend') {
    component.element.insertAdjacentElement(position, this.element);
  }

  attachChildComponents(props?: Props) {
    const nsNavbar = new NsNavbarComponent();
    const nsPressContainer = new NsPressContainerComponent();
    const nsCategoryContainer = new NsCategoryContainerObserverViewComponent();

    nsNavbar.attachTo(this);
    nsPressContainer.attachTo(this);
    nsCategoryContainer.attachTo(this);
  }

  handleToView(state: State) {
    const { view } = state;
    this.setState({ view });
  }
}
