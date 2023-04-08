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
      align-items: center;
      justify-content: space-between;
    }

    .title {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--black);
    }
    
    .date {
      color: var(--gray500);
    }
    `;

    super({ content });
  }
}

export default GridViewElementStyle;
