import { Props, State } from '@custom-types/types';
import { TempComponent } from '@custom-types/interfaces';
import { MainModel } from '@components/main/MainModel.js';
import { MainView } from '@components/main/MainView.js';
import { MainRightComponent } from '@components/main/main__right/MainRightComponent.js';
import { MainLeftComponent } from '@components/main/main__left/MainLeftComponent.js';

export class MainComponent implements TempComponent {
  private _model: MainModel;
  private _view: MainView;
  $target: HTMLElement;
  constructor(targetElement?: HTMLElement, props?: Props) {
    this.$target = targetElement as HTMLElement;
    this._model = new MainModel();
    this._view = new MainView(this.$target);

    const left = new MainLeftComponent();
    const right = new MainRightComponent();
    // 임시로 넣어줌
    (
      this.$target.querySelector('#left-main-wrapper') as HTMLElement
    ).appendChild(left.element);
    (
      this.$target.querySelector('#right-main-wrapper') as HTMLElement
    ).appendChild(right.element);
  }

  get state() {
    return this._model.state;
  }

  private setState(state: State) {
    this._model.setState(state);
    this._view.render(this._model.state);
  }
}
