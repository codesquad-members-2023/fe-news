import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import style from './ListViewStyle';
import { getSection, getCustomSection } from '@services/news/section/section';
import store from '@store/index';
import { NewsType, SectionType, TAB } from '@store/news/newsType';
import { StoreType } from '@utils/redux';
import { UserType } from '@store/user/userType';

class ListView extends HTMLElement {
  newsStore: StoreType<NewsType>;
  userStore: StoreType<UserType>;

  constructor() {
    super();
    this.newsStore = store.news;
    this.userStore = store.user;
  }

  async connectedCallback() {
    const tab = getProperty({
      target: this,
      name: 'tab',
    });
    const isGeneral = tab === TAB.GENERAL;
    const section = isGeneral
      ? await getSection({ newsStore: this.newsStore })
      : await getCustomSection({
          newsStore: this.newsStore,
          userStore: this.userStore,
        });

    addShadow({ target: this });
    this.render({ tab, section });
    addStyle({
      target: this.shadowRoot,
      style: style(),
    });
  }

  render({ tab, section }: { tab: string; section: SectionType }) {
    const template = `
    <div class="listview-container">
      ${
        section
          ? `
          <list-view-tab-element tab='${tab}' section='${JSON.stringify(
              section
            )}'></list-view-tab-element>
          <list-view-item-element tab='${tab}' section-data='${JSON.stringify(
              section.sectionData
            )}'></list-view-item-element>
          `
          : `no`
      }
    </div>
    `;
    add({
      target: this.shadowRoot,
      template,
    });
  }
}

export default ListView;
