import {
  add,
  addShadow,
  addStyle,
  create,
  getProperty,
  select,
  selectAll,
} from '@utils/dom.js';
import style from './SnackbarStyle.js';

class Snackbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const text = getProperty({ target: this, name: 'text' });

    const template = `
      <div class="wrap">
        ${text}
      </div>
      <div id="backdrop"></div>
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

    select({ selector: ['#backdrop'], parent: this }).addEventListener(
      'click',
      this.handleBlur.bind(this)
    );
  }

  show() {
    document.body.append(this);
    setTimeout(this.close.bind(this), 5000);
  }

  close() {
    this.remove();
  }

  handleBlur() {
    this.close();
  }
}

export default Snackbar;
