import Style from '@components/Style/Style';
import { getProperty } from '@utils/dom';

interface constructorProp {
  target: HTMLElement;
}

export class ListViewItemStyle extends Style {
  constructor({ target }: constructorProp) {
    const progress = getProperty({ target, name: 'progress' }) ?? '0';

    const content = `
    @import 'src/styles/index.css';
    
    .tab-container {
      display: flex;
      justify-content: space-between;
      padding: 0 16px;
      height: 100%;
      align-items: center;
      color: var(--gray300);
    }

    .is-active {
      background: linear-gradient(90deg, #4362D0 0%, #4362D0 ${progress}%, #7890E7 ${progress}%, #7890E7 100%);
      width: 166px;
      color: var(--white);
      font-weight: 700;
    }

    .index-indicator {
      display: flex;
      gap: 2px;
    }


    .index-indicator > span:not(.current-index) {
      color: var(--white70);
    }

    `;

    super({ content });
  }
}

export default ListViewItemStyle;
