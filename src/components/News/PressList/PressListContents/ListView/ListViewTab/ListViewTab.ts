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
    const categoryCountsStr = getProperty({
      target: this,
      name: 'category-counts',
    });
    const categoryCounts = categoryCountsStr && JSON.parse(categoryCountsStr);
    const categories = [
      '종합/경제',
      '방송/통신',
      'IT',
      '영자지',
      '스포츠/연예',
      '매거진/전문지',
      '지역',
    ];

    const template = `
    <div class="tab-wrap">
    ${Object.keys(categoryCounts)
      .map(
        (categoryId) =>
          `<list-view-tab-item-element is-active="true" progress="50" total-number='${
            categoryCounts[categoryId]
          }'>${categories[Number(categoryId)]}</list-view-tab-item-element>`
      )
      .join('')}

    </div>
    `;
    add({
      target: this.shadowRoot,
      template,
    });
  }
}

export default ListViewTab;
