import { add, addStyle, addShadow, getProperty, create } from '@utils/dom';
import style from './HeadlineItemStyle';
import { getRollingNews } from '@apis/rollingNews';

interface HeadlineItem {
  icon?: string | null;
}

class HeadlineItem extends HTMLElement {
  position: string;

  constructor() {
    super();
    this.position = getProperty({ target: this, name: 'position' }) ?? 'left';
  }

  async connectedCallback() {
    addShadow({ target: this });
    this.render();
    addStyle({
      target: this.shadowRoot,
      style: style(),
    });

    await this.getData();
    this.roll();
    setInterval(() => this.roll(), 2000);
  }

  async getData() {
    const news = await getRollingNews();
    const newsLeft = news.slice(0, news.length / 2);
    const newsRight = news.slice(news.length / 2);

    if (this.position === 'left') {
      newsLeft.forEach((news: string) => this.appendNews(news));
    } else {
      newsRight.forEach((news: string) => this.appendNews(news));
    }
  }

  roll() {
    const rollingNewsList: HTMLElement | null | undefined =
      this.shadowRoot?.querySelector('#rolling-news-list');
    if (!rollingNewsList) {
      return;
    }
    const firstList = rollingNewsList.querySelector('li:first-child');
    if (!firstList) {
      return;
    }
    const text = firstList.innerHTML;
    firstList.remove();
    this.appendNews(text);
  }

  render() {
    const template = `
    <p class="press">
      연합뉴스
    </p>
    <ul id="rolling-news-list">
    </ul>
    `;
    add({
      target: this.shadowRoot,
      template,
    });
  }

  appendNews(text: string) {
    const target = this.shadowRoot?.querySelector('#rolling-news-list');
    const li = create({ tagName: 'li' });
    li.classList.add('title');
    li.innerText = text;
    target?.append(li);
  }
}

export default HeadlineItem;
