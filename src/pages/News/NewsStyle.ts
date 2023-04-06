import Style from '@components/Style/Style';
import { getProperty } from '@utils/dom';

interface constructorProp {
  target: HTMLElement;
}

export class GridViewElementStyle extends Style {
  constructor({ target }: constructorProp) {
    const press = getProperty({ target, name: 'press' });
    const content = `
    @import 'src/styles/index.css';

    :host {
      width: 930px;
      display: block;
      margin: 58px auto;
    }

    headline-element {
      margin-top: 40px;
    }

    press-list-element {
      margin-top: 32px;
    }
    
    `;

    super({ content });
  }
}

export default GridViewElementStyle;
