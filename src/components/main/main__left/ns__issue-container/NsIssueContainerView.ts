import { State } from '@custom-types/types';
import { TempAbstractView } from '@custom-types/abstracts.js';
import { $ } from '@utils/dom.js';
import { NsIssueComponent } from '@components/main/main__left/ns__issue-container/ns__issue/NsIssueComponent.js';

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
    // [리팩토링 예정] 추후 issueData 타입 따로 빼주기
    const { leftRollingData, rightRollingData } = issueData as {
      leftRollingData: string[];
      rightRollingData: string[];
    };
    const leftIssue = new NsIssueComponent({
      issues: leftRollingData,
      startTime: 0,
    });
    const rightIssue = new NsIssueComponent({
      issues: rightRollingData,
      startTime: 1000,
    });
    // [리펙토링 예정]
    (
      this.$target.querySelector('#left-issue-wrapper') as HTMLElement
    ).appendChild(leftIssue.element);
    (
      this.$target.querySelector('#right-issue-wrapper') as HTMLElement
    ).appendChild(rightIssue.element);
  }
}
