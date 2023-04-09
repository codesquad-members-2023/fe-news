import { Props, State } from '@src/types/types';
import { Component } from '@src/types/interfaces';
import { MainModel } from '@components/main/MainModel.js';
import { MainView } from '@components/main/MainView.js';
import { MainRightComponent } from '@components/main/main__right/MainRightComponent.js';
import { MainLeftComponent } from '@components/main/main__left/MainLeftComponent.js';

export class MainComponent implements Component {
  private _model: MainModel;
  private _view: MainView;
  constructor(props?: Props) {
    this._model = new MainModel();
    this._view = new MainView();

    const left = new MainLeftComponent();
    const right = new MainRightComponent();
    left.attachTo(this);
    right.attachTo(this);
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
