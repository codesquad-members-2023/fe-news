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
      border-bottom: 1px solid var(--gray100);
      border-right: 1px solid var(--gray100);
    }

    .wrap.grid-view-item.right-item button {
      border-right: none;
    }

    .wrap.grid-view-item.bottom-item button {
      border-bottom: none;
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
