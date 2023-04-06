import Style from '@components/Style/Style';
import { getProperty } from '@utils/dom';

interface constructorProp {
  target: HTMLElement;
}

export class PressListStyle extends Style {
  constructor({ target }: constructorProp) {
    const content = `
    @import 'src/styles/index.css';

    .controller {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: calc(100% + 72px + 72px);
      height: var(--presslist-conent-height);
    }
    `;

    super({ content });
  }
}

export default PressListStyle;
