import { add, addStyle, addShadow, getProperty, createWrap } from '@utils/dom';
import style from './GridViewStyle';

interface GridView {
  icon?: string | null;
}

class GridView extends HTMLElement {
  wrap: HTMLElement | null = null;

  connectedCallback() {
    addShadow({ target: this });
    this.wrap = createWrap();
    this.shadowRoot?.append(this.wrap);
    this.render();

    addStyle({
      target: this.shadowRoot,
      style: style(),
    });
  }

  static get observedAttributes() {
    return ['current-tab'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'current-tab') {
      return this.render();
    }
  }

  render() {
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
      target: this.wrap,
      template,
    });
  }
}

export default GridView;
