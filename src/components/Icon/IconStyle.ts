import Style from '@components/Style/Style';
import { getProperty, add, addStyle } from '@utils/dom';

interface constructorProp {
  target: HTMLElement;
}

export class IconStyle extends Style {
  constructor({ target }: constructorProp) {
    const width = getProperty({ target, name: 'width' });
    const height = getProperty({ target, name: 'height' });
    const size = getProperty({ target, name: 'size' });

    const content = `
    @import 'src/styles/index.css';

    icon-element {
      display: inline-flex;
      height: ${height ?? size}px;
      width: ${width ?? size}px;
    }
    `;

    super({ content });
  }
}

export default IconStyle;
