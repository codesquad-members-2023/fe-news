import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import style from './ListViewStyle';

interface ListView {
  icon?: string | null;
}

class ListView extends HTMLElement {
  connectedCallback() {
    addShadow({ target: this });
    this.render();
  }

  render() {
    const sectionData = getProperty({
      target: this,
      name: 'section-data',
    });

    const template = `
    <div class="listview-container">
      <list-view-tab-element></list-view-tab-element>
      <list-view-item-element section-data='${JSON.stringify(
        sectionData
      )}' image="headline"></list-view-item-element>
    </div>
    `;
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

export default ListView;
