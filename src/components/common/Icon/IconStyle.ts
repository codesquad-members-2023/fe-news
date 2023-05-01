import { getProperty, add, addStyle } from '@utils/dom';

export default function style(target: HTMLElement) {
  const style = document.createElement('style');
  const width = getProperty({ target, name: 'width' });
  const height = getProperty({ target, name: 'height' });
  const size = getProperty({ target, name: 'size' });

  const content = `


    icon-element {
      display: inline-flex;
      height: ${height ?? size}px;
      width: ${width ?? size}px;
    }
    `;

  style.textContent = content;
  return style;
}
