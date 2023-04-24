import {
  add,
  addStyle,
  addShadow,
  getProperty,
  create,
  select,
} from '@utils/dom';
import style from './HeadlineItemStyle';
import { getRollingNewsAPI } from '@apis/rollingNews';
import { RollingNewsType } from '@store/news/newsType';
import {
  DELAY_TIME,
  INTERVAL_TIME,
  TIMER_INTERVAL_TIME,
} from '@constant/index';

interface HeadlineItem {
  icon?: string | null;
}

class HeadlineItem extends HTMLElement {
  position: string;
  count: number;
  rollingId: any;

  constructor() {
    super();
    this.position = getProperty({ target: this, name: 'position' }) ?? 'left';
    this.count = 0;
  }

  async connectedCallback() {
    addShadow({ target: this });
    this.render();
    addStyle({
      target: this.shadowRoot,
      style: style(),
    });

    await this.getData();
    const runRolling = () => {
      this.rollingId = setInterval(() => this.roll(), INTERVAL_TIME);
    };

    const runTimer = () => {
      setInterval(() => {
        this.count++;
      }, TIMER_INTERVAL_TIME);
    };

    if (this.position === 'left') {
      runRolling();
      runTimer();
    } else {
      setTimeout(runRolling, DELAY_TIME);
      setTimeout(runTimer, DELAY_TIME);
    }
    this.handleHover();
  }

  handleHover() {
    const rollingNewsList = select({
      selector: ['#rolling-news-list'],
      parent: this,
    });
    rollingNewsList.addEventListener('mouseenter', () => {
      const remainUntilNextInterval = this.count % 5;
      clearInterval(this.rollingId);
      rollingNewsList.addEventListener('mouseleave', () => {
        const runRolling = () => {
          this.rollingId = setInterval(() => this.roll(), INTERVAL_TIME);
        };
        setTimeout(runRolling, remainUntilNextInterval);
      });
    });
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
    const rollingNewsList = select({
      selector: ['#rolling-news-list'],
      parent: this,
    });
    if (!rollingNewsList) return;
    const firstList = rollingNewsList.querySelector('li:first-child');
    if (!firstList) return;

    rollingNewsList.style.transform = 'translateY(calc(-49px - 16px))';
    rollingNewsList.style.transition = 'all .5s';

    const handleTransitionEnd = () => {
      rollingNewsList.appendChild(firstList);
      rollingNewsList.removeAttribute('style');
    };
    rollingNewsList.addEventListener('transitionend', handleTransitionEnd);
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
