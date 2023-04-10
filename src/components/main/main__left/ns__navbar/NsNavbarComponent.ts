import { Props, State } from '@src/types/types';
import { Component } from '@src/types/interfaces';
import { NsNavbarModel } from '@components/main/main__left/ns__navbar/NsNavbarModel.js';
import { NsNavbarView } from '@components/main/main__left/ns__navbar/NsNavbarView.js';
import { NsArticlebarComponent } from '@components/main/main__left/ns__navbar/ns__articlebar/NsArticlebarComponent.js';

export class NsNavbarComponent implements Component {
  private _model: NsNavbarModel;
  private _view: NsNavbarView;
  constructor(props?: Props) {
    this._model = new NsNavbarModel();
    this._view = new NsNavbarView();

    const leftArticlebar = new NsArticlebarComponent({
      press: '연합뉴스',
      articleTitle: '[속보]따라란',
    });
    const rightArticlebar = new NsArticlebarComponent({
      press: '연합뉴스',
      articleTitle: '[속보]또로롱',
    });

    leftArticlebar.attachTo(this);
    rightArticlebar.attachTo(this);
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
