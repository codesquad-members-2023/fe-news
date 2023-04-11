import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import GridViewStyle from './GridViewStyle';

interface GridView {
  icon?: string | null;
}

class GridView extends HTMLElement {
  connectedCallback() {
    addShadow({ target: this });
    this.render();
  }

  render() {
    const press = getProperty({
      target: this,
      name: 'press',
    });

    const ITEM_NUMBER = 24;

    const template = `
    <div class="press-container">
    ${Array.from({ length: ITEM_NUMBER })
      .map(
        (_) =>
          `<grid-view-item-element press="sportalkorea"></grid-view-item-element>`
      )
      .join('')}
    </div>
    `;

    add({
      target: this.shadowRoot,
      template,
    });
    addStyle({
      target: this.shadowRoot,
      style: new GridViewStyle({ target: this }).element,
    });
  }
}

export default GridView;
