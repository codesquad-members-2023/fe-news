import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import style from './ListViewTabStyle';

interface ListViewTab {
  icon?: string | null;
}

class ListViewTab extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const press = getProperty({
      target: this,
      name: 'press',
    });

    const image = getProperty({
      target: this,
      name: 'image',
    });

    const template = `
    <div class="tab-wrap">
      <list-view-tab-item-element is-active="true" progress="50">종합/경제</list-view-tab-item-element>
      <list-view-tab-item-element>방송통신</list-view-tab-item-element>
      <list-view-tab-item-element>IT</list-view-tab-item-element>
      <list-view-tab-item-element>방송통신</list-view-tab-item-element>
    </div>
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

export default ListViewTab;
