import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import style from './HeadlineItemStyle';
import { getRollingNews } from '@apis/rollingNews';

interface HeadlineItem {
  icon?: string | null;
}

class HeadlineItem extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    addShadow({ target: this });
    this.render();
    addStyle({
      target: this.shadowRoot,
      style: style(),
    });

    await this.getData();
  }

  async getData() {
    const news = await getRollingNews();
    const newsLeft = news.slice(0, news.length / 2);
    const newsRight = news.slice(news.length / 2);
  }

  render(text: string = '제목wdfkajdsflkadsjflakdsjflk') {
    const template = `
    <p class="press">
      연합뉴스
    </p>
    <ul>
      <li class="title">${text}</li>
      <li class="title">${text}</li>
      <li class="title">${text}</li>
      <li class="title">${text}</li>
    </ul>
    `;
    add({
      target: this.shadowRoot,
      template,
    });
  }
}

export default HeadlineItem;
