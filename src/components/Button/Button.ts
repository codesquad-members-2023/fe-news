import style from './ButtonStyle';
import dom from '@utils/dom';
import ButtonStyle from './ButtonStyle';

interface Button {
  icon?: string | null;
}

class Button extends HTMLElement {
  constructor() {
    super();
    this.init();
  }

  init() {
    const icon = dom.get({ target: this, name: 'icon' });
    this.icon = icon;
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
    const style = new ButtonStyle().element;
    dom.addStyle({ target: this, style });
  }
}

export default Button;
