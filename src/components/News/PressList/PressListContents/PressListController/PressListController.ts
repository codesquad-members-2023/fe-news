import {
  add,
  addStyle,
  addShadow,
  getProperty,
  setProperty,
  select,
  selectAll,
} from '@utils/dom';
import style from './PressListControllerStyle';
import store from '@store/index';
import { NewsType, SectionType, TAB, VIEW } from '@store/news/newsType';
import { StoreType } from '@utils/redux';
import { UserType } from '@store/user/userType';

class PressListController extends HTMLElement {
  newsStore: StoreType<NewsType>;
  userStore: StoreType<UserType>;

  constructor() {
    super();
    this.newsStore = store.news;
    this.userStore = store.user;
  }

  async connectedCallback() {
    addShadow({ target: this });
    this.render();
    addStyle({
      target: this.shadowRoot,
      style: style(),
    });

    this.newsStore.subscribe(() => {
      this.setHideAttribute();
    });

    const controllers = selectAll({
      selector: ['controller-element', 'controller-item-element'],
      parent: this,
    });
    controllers.forEach((controller: HTMLElement) => {
      controller.addEventListener(
        'click',
        this.handleControllerClick.bind(this)
      );
    });
  }

  handleControllerClick(e: Event) {
    const target = e.target as HTMLElement;
    const position = target.getAttribute('position');
    const { currentView, currentTab } = this.newsStore.getState().display;
    if (position === 'left') {
      this.newsStore.dispatch({
        type: 'PREV_PAGE',
        payload: { view: currentView, tab: currentTab },
      });
    }
    if (position === 'right') {
      this.newsStore.dispatch({
        type: 'NEXT_PAGE',
        payload: { view: currentView, tab: currentTab },
      });
    }
  }

  setHideAttribute() {
    const { currentView, currentTab, currentPage, totalPage } =
      this.newsStore.getState().display;
    const currentTotalPage = totalPage[currentView][currentTab];

    const controller = select({
      selector: ['controller-element'],
      parent: this,
    });
    if (currentView === VIEW.LIST) {
      return setProperty({ target: controller, name: 'hide', value: 'none' });
    }
    const isLastPage = currentPage + 1 === currentTotalPage;
    const isFirstPage = currentPage === 0;
    const isOnePage = currentTotalPage <= 1;
    const hideValue = isOnePage
      ? 'all'
      : isLastPage
      ? 'right'
      : isFirstPage
      ? 'left'
      : 'none';

    setProperty({ target: controller, name: 'hide', value: hideValue });
  }

  render() {
    const template = `
    <controller-element><controller-element>
    `;
    add({
      target: this.shadowRoot,
      template,
    });
  }
}

export default PressListController;
