import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import style from './ListViewStyle';

interface ListView {
  icon?: string | null;
}

class ListView extends HTMLElement {
  connectedCallback() {
    addShadow({ target: this });
    this.render();
    addStyle({
      target: this.shadowRoot,
      style: style(),
    });
  }

  static get observedAttributes() {
    return ['section-data'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'section-data') {
      this.shadowRoot
        ?.querySelector('list-view-tab-element')
        ?.setAttribute('section-data', JSON.stringify(newValue));
      this.shadowRoot
        ?.querySelector('list-view-item-element')
        ?.setAttribute('section-data', JSON.stringify(newValue));
    }
  }

  render() {
    const sectionData = getProperty({
      target: this,
      name: 'section-data',
    });

    const isCustom = this.closest('section')?.classList.contains('custom');

    const template = `
    <div class="listview-container">
      <list-view-tab-element is-custom='${isCustom}' section-data='${JSON.stringify(
      sectionData
    )}' ></list-view-tab-element>
      <list-view-item-element section-data='${JSON.stringify(
        sectionData
      )}' image="headline"></list-view-item-element>
    </div>
    `;
    add({
      target: this.shadowRoot,
      template,
    });
  }
}

export default ListView;
