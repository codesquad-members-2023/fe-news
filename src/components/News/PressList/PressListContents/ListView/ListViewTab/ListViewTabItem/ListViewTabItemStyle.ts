import { getProperty } from '@utils/dom';

export default function style(target: HTMLElement) {
  const style = document.createElement('style');
  const progress = getProperty({ target, name: 'progress' }) ?? '0';

  const content = `
    .tab-container {
      display: flex;
      justify-content: space-between;
      padding: 0 16px;
      height: 100%;
      align-items: center;
      color: var(--gray300);
      border: 0;
      background-color: transparent;
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

  style.textContent = content;
  return style;
}
