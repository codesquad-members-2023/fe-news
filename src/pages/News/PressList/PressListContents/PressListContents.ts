import {
  add,
  addStyle,
  addShadow,
  getProperty,
  select,
  setProperty,
  create,
  createWrap,
} from '@utils/dom';
import ListViewStyle from './PressListContentsStyle';
import { TabType, Tab } from '@type/news';
import { StroeType } from '@utils/redux';
import { DisplayType } from '@store/display/displayType';
import store from '@store/index';
import { getPress } from '@apis/news';

interface PressListContents {
  icon?: string | null;
}

class PressListContents extends HTMLElement {
  wrap: HTMLElement | null = null;
  displayStore: StroeType<DisplayType>;
  page: number = 0;

  constructor() {
    super();
    this.displayStore = store.display;
  }

  connectedCallback() {
    addShadow({ target: this });
    this.wrap = createWrap();
    this.shadowRoot?.append(this.wrap);
    this.render();
    addStyle({
      target: this.shadowRoot,
      style: new ListViewStyle({ target: this }).element,
    });
    this.changeCurrentTab();
  }

  async render() {
    const pressList = await getPress({ page: this.page });
    const pressListStr = JSON.stringify(pressList);

    const template = `
    <grid-view-element press-list='${pressListStr ?? []}'></grid-view-element>
    <controller-element></controller-element>
    `;

    add({
      target: this.shadowRoot,
      template,
    });
  }

  async changeCurrentTab() {
    const rerender = async () => {
      const newTab = this.displayStore.getState().tab;
      const activeTab = newTab.find((menu: any) => menu.isActive);
      const target = select({
        selector: 'grid-view-element',
        parent: this.shadowRoot,
      });
      const isAllTab = activeTab?.name === newTab[0].name;
      const pressList = isAllTab
        ? await getPress({ page: this.page })
        : store.user.getState().subscribingPress;

      activeTab &&
        setProperty({
          target,
          name: 'press-list',
          value: JSON.stringify(pressList),
        });
    };
    this.displayStore.subscribe(rerender);
  }
}

export default PressListContents;
