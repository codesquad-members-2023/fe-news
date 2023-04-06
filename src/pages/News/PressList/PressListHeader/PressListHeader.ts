import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import ListViewStyle from './PressListHeaderStyle';

interface PressListHeader {
  icon?: string | null;
}

class PressListHeader extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const press = getProperty({
      target: this,
      name: 'press',
    });

    const tab = [
      { name: '전체 언론사', isActive: true },
      { name: '내가 구독한 언론사', isActive: false },
    ];

    const view = [
      { name: 'listView', isActive: true },
      { name: 'gridView', isActive: false },
    ];

    const template = `
    <ul class="tab">
      ${tab
        .map(
          (item) =>
            `<li class="typo-body-md${
              item.isActive ? ' is-active typo-title-md' : ''
            }">${item.name}</li>`
        )
        .join('')}
    </ul>
    <ul class="view">
    ${view
      .map(
        (item) =>
          `<li><icon-element name="${item.name}" size="24"  fill="${
            item.isActive ? 'var(--primary)' : 'var(--gray100)'
          }"></icon-element></li>`
      )
      .join('')}
    </ul>
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
