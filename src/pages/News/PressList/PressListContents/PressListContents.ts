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
import { getPress, getCustomPress } from '@apis/news';

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

  render({ tab }: any = this.displayStore.getState()) {
    const template = `
    <grid-view-element current-tab="${tab[0].name}"></grid-view-element>
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

      const data = isAllTab
        ? await getPress({ page: this.page })
        : await getCustomPress({ page: this.page });

      activeTab &&
        setProperty({
          target,
          name: 'current-tab',
          value: activeTab.name,
        });
    };
    this.displayStore.subscribe(rerender);
  }
}

export default PressListContents;
