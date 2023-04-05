import Style from '@components/Style/Style';

export class GridViewElementStyle extends Style {
  constructor() {
    const content = `
    @import 'src/styles/index.css';

    `;

    super({ content });
  }
}

export default GridViewElementStyle;
