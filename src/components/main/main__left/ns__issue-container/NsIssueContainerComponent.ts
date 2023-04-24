import { Props, State } from '@custom-types/types';
import { TempComponent } from '@custom-types/interfaces';
import { NsIssueContainerModel } from '@components/main/main__left/ns__issue-container/NsIssueContainerModel.js';
import { NsIssueContainerView } from '@components/main/main__left/ns__issue-container/NsIssueContainerView.js';
import { customGet } from '@utils/customFetch.js';
import { BASIC_URL } from '@src/constants/constants.js';

export class NsIssueContainerComponent implements TempComponent {
  private _model: NsIssueContainerModel;
  private _view: NsIssueContainerView;
  $target: HTMLElement;
  constructor(targetElement?: HTMLElement, props?: Props) {
    this.$target = targetElement as HTMLElement;
    this._model = new NsIssueContainerModel();
    this._view = new NsIssueContainerView(this.$target);

    this.setIssueData();
  }

  get state() {
    return this._model.state;
  }

  private setState(state: State) {
    this._model.setState(state);
    this._view.render(this._model.state);
  }

  async getIssueData() {
    const totalIssueData = await customGet(`${BASIC_URL}/issues`).then((res) =>
      res.json(),
    );
    return totalIssueData[0];
  }

  async setIssueData() {
    const issueData = await this.getIssueData();
    this.setState({ issueData });
  }
}
