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

    .listview-container {
      display: flex;
      flex-direction: column;
      border: 1px solid var(--gray100);
      height: var(--presslist-conent-height);
    }
    `;

    super({ content });
  }
}

export default GridViewElementStyle;
