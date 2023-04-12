import { Props, State } from '@src/types/types';
import { Component } from '@src/types/interfaces';
import { NsIssueContainerModel } from '@components/main/main__left/ns__issue-container/NsIssueContainerModel.js';
import { NsIssueContainerView } from '@components/main/main__left/ns__issue-container/NsIssueContainerView.js';
import { NsIssueComponent } from '@components/main/main__left/ns__issue-container/ns__issue/NsIssueComponent.js';
import { customGet } from '@utils/customFetch.js';
import { BASIC_URL } from '@src/constants/constants.js';

export class NsIssueContainerComponent implements Component {
  private _model: NsIssueContainerModel;
  private _view: NsIssueContainerView;
  constructor(props?: Props) {
    this._model = new NsIssueContainerModel();
    this._view = new NsIssueContainerView();

    this.attachIssueComponents();
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

  async getIssueData() {
    const totalIssueData = await customGet(`${BASIC_URL}/issues`).then((res) =>
      res.json(),
    );
    return totalIssueData[0];
  }

  async attachIssueComponents() {
    const { leftRollingData, rightRollingData } = await this.getIssueData();
    const leftIssue = new NsIssueComponent({
      issues: leftRollingData,
    });
    const rightIssue = new NsIssueComponent({
      issues: rightRollingData,
    });
    leftIssue.attachTo(this);
    rightIssue.attachTo(this);
  }
}
