import style from './ButtonStyle';
import dom from '@utils/dom';

class Button extends HTMLElement {
  constructor() {
    super();
    this.init();
  }

  init() {
    const icon = dom.get({ target: this, name: 'icon' });
    const text = this.innerText;
    dom.addShadow({ target: this });
    const template = `
    <button class="typo-body-xs">
      ${
        icon
          ? `<icon-element name="${icon}" size="12" fill="var(--gray200)"></icon-element>`
          : ''
      }
      ${text}
    </button>
    `;
    dom.add({
      target: this,
      template,
    });
    dom.addStyle({ target: this, style });
  }
}

export default Button;
