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
      align-items: center;
    }

    .tab {
      gap: 24px;
    }
    
    .view {
      gap: 8px;

    }

    .tab button {
      color: var(--gray200);
    }

    .tab button.is-active {
      color: var(--black);
    }
    


    `;

    super({ content });
  }
}

export default GridViewElementStyle;
