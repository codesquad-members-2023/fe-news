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

    .press-container {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      border-top: 1px solid var(--gray100);
      border-left: 1px solid var(--gray100);
      height: var(--presslist-conent-height);
    }
    
    `;

    super({ content });
  }
}

export default GridViewElementStyle;
