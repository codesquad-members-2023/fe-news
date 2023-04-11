import { Props, State } from '@src/types/types';
import { Component } from '@src/types/interfaces';
import { NsIssueModel } from '@components/main/main__left/ns__issue-container/ns__issue/NsIssueModel.js';
import { NsIssueView } from '@components/main/main__left/ns__issue-container/ns__issue/NsIssueView.js';

export class NsIssueComponent implements Component {
  private _model: NsIssueModel;
  private _view: NsIssueView;
  constructor(props?: Props) {
    this._model = new NsIssueModel();
    this._view = new NsIssueView();

    const { articleTitles } = props!;
    this.setState({ articleTitles });
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
