import { getProperty } from '@utils/dom';

export default function style(target: HTMLElement) {
  const style = document.createElement('style');

  const content = `
    .grid-view-item {
      width: 100%;
      min-width: 154px;
      height: 100%;
      display: inline-block;
      background-color: var(--white);
      
    }

    .grid-view-item button {
      border-color: var(--gray100);
      border-style: solid;
      border-right-width: 1px;
      border-bottom-width: 1px;
    }

    .wrap.grid-view-item.right-item {
      border-right-width: 0;
    }

    .wrap.grid-view-item.bottom-item {
      border-bottom-width: 0;
    }

    button {
      width: 100%;
      height: 100%;
      background-color: var(--white);
      position: relative;
    }

    .press-logo {
      height: 20px;
      width: 100%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }

    .press-subscribe-btn-container.hide {
      display: none;
    }

    .press-subscribe-btn-container {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--offwhite);
    }

    .press-subscribe-btn-container:hover {
      background-color: var(--offwhite);
    }    
    `;

  style.textContent = content;
  return style;
}
