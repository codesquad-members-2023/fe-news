import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import ListViewStyle from './PressListContentsStyle';

interface PressListHeader {
  icon?: string | null;
}

class PressListHeader extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const template = `
    <grid-view-element></grid-view-element>  
    <controller-element></controller-element>
    `;

    addShadow({ target: this });
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
