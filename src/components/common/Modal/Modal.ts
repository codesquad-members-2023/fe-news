import {
  add,
  addShadow,
  addStyle,
  create,
  getProperty,
  select,
  selectAll,
} from '@utils/dom.js';
import style from './ModalStyle.js';

class Modal extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const mainBtn = getProperty({ target: this, name: 'main-btn' });
    const subBtn = getProperty({ target: this, name: 'sub-btn' });
    const text = getProperty({ target: this, name: 'text' });
    const buttonStyle = `
        border: none; 
        padding: 13px 0; 
        height: auto; 
        width: 100%; 
        border-radius: 0; 
        background-color: var(--offwhite); 
        font-weight: var(--typo-body-md-fontweight);
        font-size: var(--typo-body-md-fontsize);
        line-height: var(--typo-body-md-lineheight);
        color: var(--black);`;

    const template = `
      <div class="wrap">
        <div class="pointer"></div>
        <div class="container">
          <section class="body">
            <p class="text">${text}</p>
          </section>
          <section class="footer">
            <div class="btn-container">
              <button-element style="width: 100%;" btn-style='${buttonStyle} border-right: 1px solid var(--gray100);' id='sub-btn'>${subBtn}</button-element>
              <button-element style="width: 100%;" btn-style='${buttonStyle}' id='main-btn'>${mainBtn}</button-element>
            </div>
          </section>
        </div>
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

    selectAll({ selector: ['button-element'], parent: this }).forEach(
      (button: HTMLElement) => {
        button.addEventListener('mouseover', this.handleHover.bind(this));
        button.addEventListener('mouseleave', this.handleLeave.bind(this));
      }
    );
  }

  handleHover(e: Event) {
    const target = e.target as HTMLElement;
    target.style.textDecorationLine = 'underline';
  }

  handleLeave(e: Event) {
    const target = e.target as HTMLElement;
    target.style.textDecorationLine = 'none';
  }
}

export default Modal;
