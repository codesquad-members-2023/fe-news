import { getProperty } from '@utils/dom';
import { SILDE_INTERVAL_TIME } from '@constant/index';

export default function style(target: HTMLElement) {
  const style = document.createElement('style');
  const getGrdient = (progress: number) =>
    `${progress}%   {background: linear-gradient(90deg, #4362D0 0%, #4362D0 ${progress}%, #7890E7 ${progress}%, #7890E7 100%);}`;

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

    .tab-container:hover {
      cursor: pointer;
    }

    .tab-container:hover span {
      text-decoration-line: underline;
    }

    .tab-container span {
      display: inline-block;
      width: max-content;
      
    }

    @keyframes progress {
      ${Array.from({ length: 10000 })
        .map((_, i) => getGrdient(i))
        .join('')}
    }


    .is-active {
      
      width: 166px;
      color: var(--white);
      font-weight: 700;
      animation-name: progress;
      animation-duration: ${SILDE_INTERVAL_TIME}ms;
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
