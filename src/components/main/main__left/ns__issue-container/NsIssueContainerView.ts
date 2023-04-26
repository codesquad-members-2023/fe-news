import { Issue, State } from '@custom-types/types';
import { TempAbstractView } from '@custom-types/abstracts.js';
import { NsIssueComponent } from '@components/main/main__left/ns__issue-container/ns__issue/NsIssueComponent.js';
import {
  LEFT_ISSUE_START_TIME,
  RIGHT_ISSUE_START_TIME,
} from '@src/constants/constants.js';

export class NsIssueContainerView extends TempAbstractView {
  constructor($target: HTMLElement) {
    super($target);
  }

  template(state: State) {
    return `<section class="w-full h-12 flex flex-row justify-between gap-x-2">
              <div id="left-issue-wrapper" class="w-1/2 flex flex-col justify-center bg-slate-50 border border-gray-100 "></div>
              <div id="right-issue-wrapper" class="w-1/2 flex flex-col justify-center bg-slate-50 border border-gray-100 "></div>
            </section>`;
  }

  render(state: State) {
    this.$target.innerHTML = this.template(state);
    this.addChildren(state);
    this.setEvents(state);
  }

  setEvents(state: State) {
    return;
  }

  addChildren(state: State) {
    const { issueData } = state;

    // 처음 컴포넌트 생성 시, data fetch가 일어나지 않았을 때 early return 처리
    if (!issueData) return;

    const { leftRollingData, rightRollingData } = issueData as Issue;
    const leftIssue = new NsIssueComponent(
      this.$target.querySelector('#left-issue-wrapper') as HTMLElement,
      {
        issues: leftRollingData,
        startTime: LEFT_ISSUE_START_TIME,
      },
    );
    const rightIssue = new NsIssueComponent(
      this.$target.querySelector('#right-issue-wrapper') as HTMLElement,
      {
        issues: rightRollingData,
        startTime: RIGHT_ISSUE_START_TIME,
      },
    );
  }
}
