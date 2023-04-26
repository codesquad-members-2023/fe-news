import { getProperty } from '@utils/dom';
import { SILDE_INTERVAL_TIME } from '@constant/index';

export default function style(target: HTMLElement) {
  const style = document.createElement('style');
  const getGrdient = (progress: number) =>
    `${progress}%   {background: linear-gradient(90deg, #4362D0 0%, #4362D0 ${progress}%, #7890E7 ${progress}%, #7890E7 100%);}`;

  const content = `
    .tab-container {
      display: flex;
      height: 100%;
      align-items: center;
      color: var(--gray300);
      border: 0;
      background-color: transparent;
      position: relative;
      padding: 0 16px;
    }

    .is-active {
      background-color: #7890E7;
    }

    .progress-bar {
      display: none;
    }
    
    .is-active::before {
      content: '';
      display: block;
      position: absolute;
      height: 100%;
      background-color: var(--primary);
      width: 100%;
      left: 0;
      animation: progressBarAnimation ${SILDE_INTERVAL_TIME}ms linear;
    }
  
    .is-active .tab-contents {
      position: absolute;
      display: flex;
      justify-content: space-between;
      width: calc(166px - 16px - 16px);
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

    @keyframes progressBarAnimation {
      from {
        width: 0%;
      }
      to {
        width: 100%;
      }
    }

    .is-active {
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
