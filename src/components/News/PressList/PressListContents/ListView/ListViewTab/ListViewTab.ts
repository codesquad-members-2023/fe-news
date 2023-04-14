import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import style from './ListViewTabStyle';

interface ListViewTab {
  icon?: string | null;
}

class ListViewTab extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    addShadow({ target: this });
    this.render();
    addStyle({
      target: this.shadowRoot,
      style: style(),
    });
  }

  render() {
    const template = `
    <div class="tab-wrap">
      <list-view-tab-item-element is-active="true" progress="50">종합/경제</list-view-tab-item-element>
      <list-view-tab-item-element>방송통신</list-view-tab-item-element>
      <list-view-tab-item-element>IT</list-view-tab-item-element>
      <list-view-tab-item-element>방송통신</list-view-tab-item-element>
    </div>
    `;
    add({
      target: this.shadowRoot,
      template,
    });
  }
}

export default ListViewTab;
