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
import { customSetInterval } from '@utils/animation';

interface HeadlineItem {
  icon?: string | null;
}

class HeadlineItem extends HTMLElement {
  position: string;
  count: number;
  rolling: any;

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

    const runTimer = () => {
      customSetInterval({
        intervalTime: TIMER_INTERVAL_TIME,
        callback: () => {
          this.count++;
        },
      });
    };

    if (this.position === 'left') {
      this.runRolling.call(this);
      runTimer();
    } else {
      setTimeout(this.runRolling.bind(this), DELAY_TIME);
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

      this.rolling.stop();
      rollingNewsList.addEventListener('mouseleave', () => {
        this.rolling.start();
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

  runRolling() {
    this.rolling = customSetInterval({
      intervalTime: INTERVAL_TIME,
      callback: this.roll.bind(this),
    });
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
