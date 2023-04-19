import { add, addStyle, addShadow, getProperty, createWrap } from '@utils/dom';
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
  }

  static get observedAttributes() {
    return ['show'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'show') {
      if (newValue === 'true')
        this.shadowRoot
          ?.querySelector('.press-container')
          ?.classList.add('show');
      if (newValue === 'false')
        this.shadowRoot
          ?.querySelector('.press-container')
          ?.classList.remove('show');
    }
  }

  render() {
    const pressListStr = getProperty({
      target: this,
      name: 'press-list',
    });
    const show = getProperty({
      target: this,
      name: 'show',
    });
    const pressList = pressListStr ? JSON.parse(pressListStr) : [];
    const template = `
    <div class="press-container${show === 'true' ? ' show' : ''}">
    ${Array.from({ length: MAX_ITEM_NUM })
      .map((_, i: number) => {
        const press = pressList[i];
        console.log(press);
        if (press) {
          return `<grid-view-item-element id='${press.pid}' image='${press.newMainLogo}' index='${i}' is-subscribed='${press.isSubscribed}'></grid-view-item-element>`;
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
