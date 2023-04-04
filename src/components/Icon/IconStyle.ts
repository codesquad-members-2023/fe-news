import Style from '@components/Style/Style';

export class IconStyle extends Style {
  constructor() {
    const content = `
    @import 'src/styles/index.css';

    :host {
      display: inline-flex;
    }
    `;

    super({ content });
  }
}

export default IconStyle;
