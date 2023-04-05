import Style from '@components/Style/Style';
import { get } from '@utils/dom';

interface constructorProp {
  target: HTMLElement;
}

export class GridViewElementStyle extends Style {
  constructor({ target }: constructorProp) {
    const image = get({ target, name: 'image' });
    const content = `
    @import 'src/styles/index.css';

    :host {
      width: 154.17px;
      height: 96.25px;
      display: inline-block;
    }

    button {
      width: 100%;
      height: 100%;
      background-color: var(--white);
      position: relative;
    }

    

    .press-logo {
      height: 20px;
      width: 100%;
      background-image: url(src/assets/images/press-logo/${image});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }

    .press-subscribe-btn-container.hide {
      display: none;
    }

    .press-subscribe-btn-container {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--offwhite);
    }

    .press-subscribe-btn-container:hover {
      background-color: var(--offwhite);
    }


    
    `;

    super({ content });
  }
}

export default GridViewElementStyle;
