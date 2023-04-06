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
      display: flex;
      justify-content: space-between;
    }

    ul {
      display: flex;

    }

    .tab {
      gap: 24px;
    }


    .tab li {
      color: var(--gray200);
    }

    .tab li.is-active {
      color: var(--black);
    }
    

    `;

    super({ content });
  }
}

export default GridViewElementStyle;
