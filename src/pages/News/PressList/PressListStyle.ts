import Style from '@components/Style/Style';
import { getProperty } from '@utils/dom';

interface constructorProp {
  target: HTMLElement;
}

export class PressListStyle extends Style {
  constructor({ target }: constructorProp) {
    const press = getProperty({ target, name: 'press' });
    const content = `
    @import 'src/styles/index.css';

    :host {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    
    

    `;

    super({ content });
  }
}

export default PressListStyle;
