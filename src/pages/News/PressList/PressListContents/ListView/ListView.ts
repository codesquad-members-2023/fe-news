import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import ListViewStyle from './ListViewStyle';

interface ListView {
  icon?: string | null;
}

class ListView extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const press = getProperty({
      target: this,
      name: 'press',
    });

    const template = `
    <div class="listview-container">
      <list-view-tab-element></list-view-tab-element>
      <list-view-item-element press="sportalkorea" image="headline"></list-view-item-element>
    </div>
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

export default ListView;
