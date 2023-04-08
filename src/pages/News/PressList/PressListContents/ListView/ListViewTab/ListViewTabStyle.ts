import Style from '@components/Style/Style';
import { getProperty } from '@utils/dom';

interface constructorProp {
  target: HTMLElement;
}

export class ListViewItemStyle extends Style {
  constructor({ target }: constructorProp) {
    const content = `
    @import 'src/styles/index.css';

    .tab-wrap {
      height: 40px;
      display: flex;
      background-color: var(--offwhite);
      border-bottom: 1px solid var(--gray100);
    }



    `;

    super({ content });
  }
}

export default ListViewItemStyle;
