import {
  addShadow,
  getProperty,
  add,
  addStyle,
  setProperty,
  select,
} from '@utils/dom';
import style from './ButtonStyle';

interface Button {
  icon?: string | null;
}

class Button extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const icon = getProperty({ target: this, name: 'icon' });
    const styleLiteral = getProperty({ target: this, name: 'btn-style' });
    const text = this.innerText;

    const template = `
    <button class="typo-body-xs" style='${styleLiteral}'>
      ${
        icon
          ? `<icon-element name="${icon}" size="12" fill="var(--gray200)"></icon-element>`
          : ''
      }
      ${text}
    </button>
    `;

    addShadow({ target: this });
    add({
      target: this.shadowRoot,
      template,
    });

    addStyle({
      target: this.shadowRoot,
      style: style(),
    });
  }
}

export default Button;
