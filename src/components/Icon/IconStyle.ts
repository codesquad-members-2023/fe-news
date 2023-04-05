import Style from '@components/Style/Style';
import { get, add, addStyle } from '@utils/dom';

interface constructorProp {
  target: HTMLElement;
}

export class IconStyle extends Style {
  constructor({ target }: constructorProp) {
    const width = get({ target, name: 'width' });
    const height = get({ target, name: 'height' });
    const size = get({ target, name: 'size' });

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
