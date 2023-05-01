import {
  add,
  addStyle,
  addShadow,
  getProperty,
  createWrap,
  select,
} from '@utils/dom';
import style from './GridViewStyle';
import { MAX_ITEM_NUM } from '@constant/index';

interface GridView {
  icon?: string | null;
}

class GridView extends HTMLElement {
  wrap: HTMLElement | null = null;

  connectedCallback() {
    addShadow({ target: this });
    this.wrap = createWrap();
    this.wrap.classList.add('grid-view');
    this.shadowRoot?.append(this.wrap);
    this.render();
    addStyle({
      target: this.shadowRoot,
      style: style(),
    });
    this.setShowAtrribute();
  }

  static get observedAttributes() {
    return ['show'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'show') {
      this.setShowAtrribute();
    }
  }

  setShowAtrribute() {
    if (!this.shadowRoot) return;
    const show = getProperty({
      target: this,
      name: 'show',
      type: 'boolean',
    });
    const target = select({
      selector: ['.press-container'],
      parent: this,
    });

    show ? target?.classList.add('show') : target?.classList.remove('show');
  }

  render() {
    const pressList =
      getProperty({
        target: this,
        name: 'press-list',
        type: 'object',
      }) ?? [];

    const template = `
    <div class="press-container">
    ${Array.from({ length: MAX_ITEM_NUM })
      .map((_, i: number) => {
        const press = pressList[i];
        if (press) {
          return `<grid-view-item-element id='${press.pid}' name='${press.pname}' image='${press.newMainLogo}' index='${i}' is-subscribed='${press.isSubscribed}'></grid-view-item-element>`;
        }
        return `<grid-view-item-element index='${i}'></grid-view-item-element>`;
      })
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
