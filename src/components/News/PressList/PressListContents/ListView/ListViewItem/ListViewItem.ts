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
import Modal from '@common/Modal/Modal';
import UnsubscribeModal from '@common/Modal/UnsubscribeModal/UnsubscribeModal';
import Snackbar from '@common/Snackbar/Snackbar';

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
    // this.userStore.subscribe(this.renderSubscribingBtn);
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

    if (!sectionData) return;

    const { press, articles } = sectionData;
    const mainArticle = articles?.[0];
    const otherArticles = articles?.slice(1);
    const lastEdited = new Date(sectionData?.lastEdited).toLocaleString(
      'ko-KR',
      {
        timeZone: 'Asia/Seoul',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }
    );

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
            <button class="image"><img src='${article.img}' width='320px'></img></button>
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

    const { pressId, press } = sectionData;

    const btnContainer = select({ selector: ['.btn-container'], parent: this });
    const isSubscribed = pressId
      ? this.userStore.getState().subscribingPressIds.includes(pressId)
      : '';

    const template = `
      <button-element name="${press.pname}" icon="${
      isSubscribed ? 'close' : 'plus'
    }" id='${pressId}'>
          ${isSubscribed ? '해지하기' : '구독하기'}
      </button-element>`;
    add({ target: btnContainer, template });

    select({ selector: ['button-element'], parent: this }).addEventListener(
      'click',
      this.handleClick.bind(this)
    );
  }

  handleClick(e: Event) {
    const target = e.target as HTMLElement;
    const isSubscribed = getProperty({ target, name: 'icon' }) === 'close';
    const id = getProperty({ target, name: 'id' });
    const name = getProperty({ target, name: 'name' });

    if (isSubscribed) {
      const modal = new UnsubscribeModal(name, id);
      modal.show();
      this.userStore.subscribe(this.renderSubscribingBtn.bind(this));
    } else {
      const snackbar = create({
        tagName: 'snackbar-element',
        attributeList: [['text', '내가 구독한 언론사에 추가되었습니다.']],
      }) as Snackbar;
      snackbar.show();
      this.userStore.dispatch({
        type: 'SUBSCRIBE',
        payload: id,
      });
    }

    this.renderSubscribingBtn();
  }
}

export default ListViewItem;
