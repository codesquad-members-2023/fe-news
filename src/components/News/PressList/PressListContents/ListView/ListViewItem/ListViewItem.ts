import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import style from './ListViewItemStyle';
import { ArticleInterface } from '@store/section/sectionType';

interface ListViewItem {
  icon?: string | null;
}

class ListViewItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    addShadow({ target: this });
    this.render();
  }

  static get observedAttributes() {
    return ['section-data'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'section-data') {
      this.render();
    }
  }

  render() {
    const sectionDataStr = getProperty({
      target: this,
      name: 'section-data',
    });

    const sectionData = sectionDataStr
      ? JSON.parse(JSON.parse(sectionDataStr))
      : null;

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

    const press = sectionData?.press;
    const articles = sectionData?.articles;
    const mainArticle = articles?.[0];
    const otherArticles = articles?.slice(1);

    const template = `
    <div class="header">
      <img ${
        press ? `src="${press.newMainLogo}"` : ''
      } height="20px" width="auto">
      <p class="edit-time">${lastEdited ?? ''} 편집</p>
      ${
        press.isSubscribed
          ? `<button-element icon="close" id='${
              press ? press.pid : ''
            }'>해지하기</button-element>`
          : `<button-element icon="plus" id='${
              press ? press.pid : ''
            }'>구독하기</button-element>`
      }
      
    </div>
    <div class="contents">
      ${[mainArticle].map(
        (article: ArticleInterface) =>
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
            (article: ArticleInterface, i: number) =>
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
  }
}

export default ListViewItem;
