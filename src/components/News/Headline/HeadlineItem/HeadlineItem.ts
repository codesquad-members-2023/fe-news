import { add, addStyle, addShadow, getProperty, create } from '@utils/dom';
import style from './HeadlineItemStyle';
import { getRollingNewsAPI } from '@apis/rollingNews';
import { RollingNewsType } from '@store/news/newsType';

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
    const news = await getRollingNewsAPI();
    const newsLeft = news.slice(0, news.length / 2);
    const newsRight = news.slice(news.length / 2);

    if (this.position === 'left') {
      newsLeft.forEach((news: RollingNewsType) => this.appendNews(news));
      return;
    }
    newsRight.forEach((news: RollingNewsType) => this.appendNews(news));
  }

  roll() {
    const rollingNewsList: HTMLElement | null =
      this.shadowRoot?.querySelector('#rolling-news-list') ?? null;

    if (!rollingNewsList) {
      return;
    }

    const firstList = rollingNewsList.querySelector('li:first-child');
    if (!firstList) {
      return;
    }
    const title = firstList.querySelector('a')?.innerText ?? '';
    const link = firstList.querySelector('a')?.getAttribute('href') ?? '';
    firstList.remove();
    this.appendNews({ title, link });
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

  appendNews(news: RollingNewsType) {
    const target = this.shadowRoot?.querySelector('#rolling-news-list');
    const li = create({
      tagName: 'li',
      classList: ['title'],
    });
    const a = create({
      tagName: 'a',
      attributeList: [['href', news.link]],
      text: news.title,
    });
    li.append(a);

    target?.append(li);
  }
}

export default HeadlineItem;
