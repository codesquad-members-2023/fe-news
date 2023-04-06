import Style from '@components/Style/Style';
import { getProperty } from '@utils/dom';

interface constructorProp {
  target: HTMLElement;
}

export class PressListStyle extends Style {
  constructor({ target }: constructorProp) {
    const position = getProperty({ target, name: 'position' });
    const rotate = position === 'right' ? '-90' : '90';

    const content = `
   @import 'src/styles/index.css';

    :host {
      display: flex;
      align-items: center;
      height: 100%;
      position: absolute;
      top:0;
      ${position === 'right' ? 'right: -72px' : 'left: -72px'}
    }

    :host(:hover) {
      cursor: pointer;
    }

    .controller {
      width: 40px;
      height: 24px;
      transform: rotate(${rotate}deg);
      
    }

    .controller::before,
    .controller::after {
      content: "";
      position: absolute;
      top: 50%;
      width: 24px;
      height: 1px;
      background-color: var(--gray300);
    }

    .controller::before {
      left: 0;
      transform: translateY(-50%) rotate(45deg);
    }

    .controller::after {
      right: 0;
      transform: translateY(-50%) rotate(-45deg);
    }

    .controller.left {
      transform: rotate(90deg);
    }

    .controller.right {
      transform: rotate(-90deg);
    }
    `;

    super({ content });
  }
}

export default PressListStyle;
