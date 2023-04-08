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
      padding: 0 16px;
      gap: 16px;
      width: 100%;
      min-height: 49px;
      height: auto;
      background: var(--offwhite);
      border: 1px solid var(--gray100);
      align-items: center;
    }

    .press {
      flex-grow: 0;
      color: var(--black);
      white-space: nowrap;
    }
    
    .title {
      flex-grow: 1;
      color: var(--gray500);
      
    }
    `;

    super({ content });
  }
}

export default GridViewElementStyle;
