import { Props, State } from '@src/types/types';
import { Component } from '@src/types/interfaces';
import { NsArticlebarModel } from '@components/main/main__left/ns__navbar/ns__articlebar/NsArticlebarModel.js';
import { NsArticlebarView } from '@components/main/main__left/ns__navbar/ns__articlebar/NsArticlebarView.js';

export class NsArticlebarComponent implements Component {
  private _model: NsArticlebarModel;
  private _view: NsArticlebarView;
  constructor(props?: Props) {
    this._model = new NsArticlebarModel();
    this._view = new NsArticlebarView();

    const { press, articleTitle } = props!;
    this.setState({ press, articleTitle });
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
