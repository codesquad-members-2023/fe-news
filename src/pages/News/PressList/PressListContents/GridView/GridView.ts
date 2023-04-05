import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import GridViewStyle from './GridViewStyle';

interface GridViewItem {
  icon?: string | null;
}

class GridViewItem extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const press = getProperty({
      target: this,
      name: 'press',
    });

    const template = `
    <div class="press-container">
    ${Array.from({ length: 24 })
      .map(
        (_) =>
          `<grid-view-item-element press="sportalkorea"></grid-view-item-element>`
      )
      .join('')}
    
      
    </div>
    `;
    addShadow({ target: this });
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

export default GridViewItem;
