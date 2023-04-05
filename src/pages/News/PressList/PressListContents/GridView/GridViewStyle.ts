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
      gap: 1px;
      background-color: var(--gray100);
    }
    
    `;

    super({ content });
  }
}

export default GridViewElementStyle;
