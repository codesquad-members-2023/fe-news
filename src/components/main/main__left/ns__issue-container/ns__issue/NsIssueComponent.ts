import { Props, State } from '@custom-types/types';
import { TempComponent } from '@custom-types/interfaces';
import { NsIssueModel } from '@components/main/main__left/ns__issue-container/ns__issue/NsIssueModel.js';
import { NsIssueView } from '@components/main/main__left/ns__issue-container/ns__issue/NsIssueView.js';
import {
  ISSUE_TIME_INTERVAL,
  ISSUES_START_INDEX,
} from '@src/constants/constants.js';

export class NsIssueComponent implements TempComponent {
  private _model: NsIssueModel;
  private _view: NsIssueView;
  $target: HTMLElement;
  constructor(targetElement?: HTMLElement, props?: Props) {
    this.$target = targetElement as HTMLElement;
    this._model = new NsIssueModel();
    this._view = new NsIssueView(this.$target);

    const { issues, startTime } = props as {
      issues: string[];
      startTime: number;
    };

    this.setIssue(issues, startTime);
  }

  get state() {
    return this._model.state;
  }

  private setState(state: State) {
    this._model.setState(state);
    this._view.render(this._model.state);
  }

  setIssue(issues: string[], startTime: number) {
    this.setState({ issue: issues[ISSUES_START_INDEX] });
    setTimeout(() => {
      let issueIndex = ISSUES_START_INDEX + 1;

      setInterval(() => {
        if (issueIndex === (issues as string[]).length) {
          issueIndex = ISSUES_START_INDEX;
        }
        this.setState({ issue: issues[issueIndex++] });
      }, ISSUE_TIME_INTERVAL);
    }, startTime);
  }
}
