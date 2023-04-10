import { Props, State } from '@src/types/types';
import { Component } from '@src/types/interfaces';
import { NsIssueContainerModel } from '@components/main/main__left/ns__issue-container/NsIssueContainerModel.js';
import { NsIssueContainerView } from '@components/main/main__left/ns__issue-container/NsIssueContainerView.js';
import { NsIssueComponent } from '@components/main/main__left/ns__issue-container/ns__issue/NsIssueComponent.js';

export class NsIssueContainerComponent implements Component {
  private _model: NsIssueContainerModel;
  private _view: NsIssueContainerView;
  constructor(props?: Props) {
    this._model = new NsIssueContainerModel();
    this._view = new NsIssueContainerView();

    const leftIssue = new NsIssueComponent({
      press: '연합뉴스',
      articleTitle: '[1보] 김기현·안철수·천하람·황교안, 與전대 본경선 진출',
    });
    const rightIssue = new NsIssueComponent({
      press: '연합뉴스',
      articleTitle: '[속보] 與최고위원 본경선, 김병민·김용태·김재원·민영삼',
    });

    leftIssue.attachTo(this);
    rightIssue.attachTo(this);
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
