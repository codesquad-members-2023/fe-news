import { add, addStyle, addShadow, select, selectAll } from '@utils/dom';
import style from './HeadlineStyle';

interface HeadlineItem {
  icon?: string | null;
}

class HeadlineItem extends HTMLElement {
  count: number;
  constructor() {
    super();
    this.count = 0;
  }

  connectedCallback() {
    addShadow({ target: this });
    this.render();
    addStyle({
      target: this.shadowRoot,
      style: style(),
    });
    // setInterval(() => console.log(this.count++ % 5), 1000);
    // this.handleHover();
  }

  // handleHover() {
  //   const rollingNewsList = selectAll({
  //     selector: ['headline-item-element', '#rolling-news-list'],
  //     parent: this,
  //   });
  //   rollingNewsList.forEach((ul: HTMLElement) => {
  //     ul.addEventListener('mouseenter', () => {
  //       console.log('hover');
  //     });
  //   });
  // }

  render() {
    const template = `
    <headline-item-element position="left"></headline-item-element>
    <headline-item-element position="right"></headline-item-element>
    `;

    add({
      target: this.shadowRoot,
      template,
    });
  }
}

export default HeadlineItem;
