import {
  add,
  addStyle,
  addShadow,
  getProperty,
  create,
  select,
} from '@utils/dom';
import style from './ListViewItemStyle';

import store from '@store/index';
import { StoreType } from '@utils/redux';
import { UserType } from '@store/user/userType';
import { SectionType } from '@store/news/newsType';

interface ListViewItem {
  icon?: string | null;
}

class ListViewItem extends HTMLElement {
  userStore: StoreType<UserType>;

  constructor() {
    super();
    this.userStore = store.user;
  }

  connectedCallback() {
    addShadow({ target: this });

    this.render();
    this.rerenderWhenSubscribeUpdated();
  }

  rerenderWhenSubscribeUpdated() {
    this.userStore.subscribe(() => {
      this.renderSubscribingBtn();
    });
  }

  static get observedAttributes() {
    return ['section-data'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'section-data') {
      return this.render();
    }
  }

  render() {
    const sectionData = getProperty({
      target: this,
      name: 'section-data',
      type: 'object',
    });
    const now = new Date(sectionData?.lastEdited);

    const lastEdited = now.toLocaleString('ko-KR', {
      timeZone: 'Asia/Seoul',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

    const { press, articles } = sectionData;
    const mainArticle = articles?.[0];
    const otherArticles = articles?.slice(1);

    const template = `
    <div class="header">
      <img ${
        press ? `src="${press.newMainLogo}"` : ''
      } height="20px" width="auto">
      <p class="edit-time">${lastEdited ?? ''} 편집</p>
      <div class="btn-container"></div>
    </div>
    <div class="contents">
      ${[mainArticle].map(
        (article: any) =>
          `<div class="headliner">
            <button class="image" ${`style="background-image: url('${article.img}')"`}></button>
            <div class="title">
            <a href='${article.link}'>${article.title}</a>
          </div>`
      )}
    </div>
      <div class="articles-container">
        <ul>
        ${otherArticles
          .slice(1)
          .map(
            (article: any, i: number) =>
              `<li class="typo-body-md" id='${article.id}'><a href='${article.link}'>${article.title}</a></li>`
          )
          .join('')}
        </ul>
        <span class="caption typo-body-sm">${
          press.pname ?? ''
        } 언론사에서 직접 편집한 뉴스입니다.</span>
      </div>
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

    this.renderSubscribingBtn();
  }

  renderSubscribingBtn() {
    const sectionData = getProperty({
      target: this,
      name: 'section-data',
      type: 'object',
    });

    const { pressId } = sectionData;

    const btnContainer = select({ selector: ['.btn-container'], parent: this });
    const isSubscribed = pressId
      ? this.userStore.getState().subscribingPressIds.includes(pressId)
      : '';

    const template = `
      <button-element icon="${isSubscribed ? 'close' : 'plus'}" id='${pressId}'>
          ${isSubscribed ? '해지하기' : '구독하기'}
      </button-element>`;
    add({ target: btnContainer, template });
  }
}

export default ListViewItem;
