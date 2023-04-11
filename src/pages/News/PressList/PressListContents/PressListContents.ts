import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import ListViewStyle from './PressListContentsStyle';
import { TabType, Tab } from '@type/news';

interface PressListHeader {
  icon?: string | null;
}

class PressListHeader extends HTMLElement {
  connectedCallback() {
    addShadow({ target: this });
    this.render();
  }

  static get observedAttributes() {
    return ['current-tab'];
  }

  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    if (name === 'current-tab') {
      this.shadowRoot
        ?.querySelector('grid-view-element')
        ?.setAttribute('current-tab', newValue);
    }
  }

  render() {
    const currentTarget = getProperty({ target: this, name: 'current-tab' });
    console.log('render', this.getAttribute('current-tab'));
    const template = `
    <grid-view-element current-tab="${currentTarget}"></grid-view-element>
    <controller-element></controller-element>
    `;

    add({
      target: this.shadowRoot,
      template,
    });
    addStyle({
      target: this.shadowRoot,
      style: new ListViewStyle({ target: this }).element,
    });
  }
}

export default PressListHeader;
