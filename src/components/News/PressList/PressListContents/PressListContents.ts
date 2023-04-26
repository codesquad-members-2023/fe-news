import {
  add,
  addStyle,
  addShadow,
  select,
  create,
  createWrap,
  toggleClass,
  setProperty,
  getProperty,
  removeClass,
  addClass,
  selectAll,
} from '@utils/dom';
import list from './PressListContentsStyle';
import { StoreType } from '@utils/redux';
import store from '@store/index';
import { getUser, subscribeAPI, unsubscribeAPI } from '@apis/user';
import { TEMP_ID } from '@constant/index';
import { UserType } from '@store/user/userType';
import { getSection, getCustomSection } from '@services/news/section/section';
import { NewsType, TAB, VIEW } from '@store/news/newsType';
import { getPressList } from '@services/news/press/press';
import { filterSusbscribedPress } from '@services/news/news';

interface PressListContents {
  icon?: string | null;
}

class PressListContents extends HTMLElement {
  wrap: HTMLElement | null = null;
  newsStore: StoreType<NewsType>;
  userStore: StoreType<UserType>;

  constructor() {
    super();
    this.newsStore = store.news;
    this.userStore = store.user;
  }

  async connectedCallback() {
    addShadow({ target: this });
    this.wrap = createWrap();
    this.shadowRoot?.append(this.wrap);
    this.render();
    addStyle({
      target: this.shadowRoot,
      style: list(),
    });

    await this.setPressList();
    this.handleDisplay();
  }

  async setPressList() {
    const pressList = await getPressList({ newsStore: this.newsStore });
    const customPressList = filterSusbscribedPress({
      pressList,
      subscribingPressIds: this.userStore.getState().subscribingPressIds,
    });

    setProperty({
      target: select({
        selector: ['section.general grid-view-container-element'],
        parent: this,
      }),
      name: 'press-list',
      value: pressList,
      type: 'object',
    });
    setProperty({
      target: select({
        selector: ['section.custom grid-view-container-element'],
        parent: this,
      }),
      name: 'press-list',
      value: customPressList,
      type: 'object',
    });
    setProperty({
      target: select({
        selector: ['section.custom list-view-element'],
        parent: this,
      }),
      name: 'press-list',
      value: customPressList,
      type: 'object',
    });
  }

  render() {
    const template = `
    <section class="general show">
      <div class="view grid show">
        <grid-view-container-element tab='general'></grid-view-container-element>
      </div>
      <div class="view list">
        <list-view-element tab='general'></list-view-element>
      </div>
    </section>
    <section class="custom">
      <div class="view grid">
        <grid-view-container-element tab='custom'></grid-view-container-element>
      </div>
      <div class="view list">
        <list-view-element tab='custom'></list-view-element>
      </div>
    </section>
    <press-list-controller-element></press-list-controller-element>
    `;

    add({
      target: this.wrap,
      template,
    });
  }

  async handleDisplay() {
    const toggleShowClass = async () => {
      const { currentTab, currentView } = this.newsStore.getState().display;

      const hideTab = currentTab === TAB.GENERAL ? TAB.CUSTOM : TAB.GENERAL;
      const hideView = currentView === VIEW.GRID ? VIEW.LIST : VIEW.GRID;

      const tabToDisplay = select({
        selector: [`section.${currentTab}`],
        parent: this.wrap,
      });
      const tabToHide = select({
        selector: [`section.${hideTab}`],
        parent: this.wrap,
      });
      const viewToDisplay = select({
        selector: [`section.${currentTab} .view.${currentView}`],
        parent: this.wrap,
      });
      const viewToHide = select({
        selector: [`section.${currentTab} .view.${hideView}`],
        parent: this.wrap,
      });

      addClass({ target: tabToDisplay, className: 'show' });
      removeClass({ target: tabToHide, className: 'show' });
      addClass({ target: viewToDisplay, className: 'show' });
      removeClass({ target: viewToHide, className: 'show' });
    };
    this.newsStore.subscribe(toggleShowClass);
  }

  // handleSubscribe() {
  //   const storeUser = store.user;
  //   interface runSubscribeProps {
  //     id: string;
  //     target: HTMLElement | null | undefined | Element;
  //   }
  //   return {
  //     getCustomPressList: () => {
  //       const subscribingPressIds =
  //         this.userStore.getState().subscribingPressIds;
  //       const pressList = this.newsStore.getState().press.pressList;
  //       const customPressList = pressList.filter((press: any) =>
  //         subscribingPressIds.includes(press.pid)
  //       );
  //       this.newsStore.dispatch({
  //         type: 'SET_CUSTOM_PRESS_LIST',
  //         payload: { pressList: customPressList },
  //       });
  //     },
  //     unsubscribe: ({ id, target }: runSubscribeProps) => {
  //       unsubscribeAPI({ id: TEMP_ID, pressId: id });
  //       storeUser.dispatch({
  //         type: 'UNSUBSCRIBE',
  //         payload: id,
  //       });
  //       this.newsStore.dispatch({
  //         type: 'UNSUBSCRIBE',
  //         payload: id,
  //       });
  //       setProperty({
  //         target,
  //         name: 'is-subscribed',
  //         value: 'false',
  //       });
  //     },
  //     subscribe: ({ id, target }: runSubscribeProps) => {
  //       subscribeAPI({ id, pressId: id });
  //       storeUser.dispatch({
  //         type: 'SUBSCRIBE',
  //         payload: id,
  //       });
  //       this.newsStore.dispatch({
  //         type: 'SUBSCRIBE',
  //         payload: id,
  //       });
  //       setProperty({
  //         target,
  //         name: 'is-subscribed',
  //         value: 'true',
  //       });
  //     },

  //     updateCustomGridViewData: () => {
  //       this.handleSubscribe().getCustomPressList();
  //       const customPressList = this.newsStore.getState().press.customPressList;
  //       const gridViewContainerElement = this.shadowRoot
  //         ?.querySelector(`section.custom`)
  //         ?.querySelector('.view.grid')
  //         ?.querySelector('grid-view-container-element');
  //       setProperty({
  //         target: gridViewContainerElement,
  //         name: 'press-list',
  //         value: JSON.stringify(customPressList),
  //       });
  //       this.handleSubscribe().addClickEvnetToGridView('custom');
  //     },
  //     addClickEvnetToGridView: (tab: 'general' | 'custom' = 'general') => {
  //       const handleClick = (e: Event) => {
  //         const target = e.target as HTMLElement;
  //         const gridViewItem = target.closest('grid-view-item-element');
  //         const id = gridViewItem?.getAttribute('id');
  //         if (!id) return;
  //         const isSubscribed = target.getAttribute('icon') === 'close';
  //         const gridViewItemElement = target?.closest('grid-view-item-element');
  //         isSubscribed
  //           ? this.handleSubscribe().unsubscribe({
  //               id,
  //               target: gridViewItemElement,
  //             })
  //           : this.handleSubscribe().subscribe({
  //               id,
  //               target: gridViewItemElement,
  //             });
  //         this.handleSubscribe().updateCustomGridViewData();
  //       };
  //       const gridView = this.shadowRoot
  //         ?.querySelector(`section.${tab}`)
  //         ?.querySelector('.view.grid')
  //         ?.querySelector('grid-view-container-element')
  //         ?.shadowRoot?.querySelectorAll('grid-view-element');
  //       gridView?.forEach((gridViewElement) => {
  //         gridViewElement.shadowRoot?.addEventListener('click', (e) =>
  //           handleClick(e)
  //         );
  //       });
  //     },
  //     addClickEvnetToListView: (tab: 'general' | 'custom' = 'general') => {
  //       const handleClick = (e: Event) => {
  //         const target = e.target as HTMLElement;
  //         const id = target?.getAttribute('id');
  //         if (!id) return;
  //         const isSubscribed = target.getAttribute('icon') === 'close';
  //         const listViewItemElement = document
  //           .querySelector('news-element')
  //           ?.shadowRoot?.querySelector('press-list-element')
  //           ?.shadowRoot?.querySelector('presslist-contents-element')
  //           ?.shadowRoot?.querySelector(`section.${tab}`)
  //           ?.querySelector('.view.list')
  //           ?.querySelector('list-view-element')
  //           ?.shadowRoot?.querySelector('list-view-item-element');
  //         if (!isSubscribed) {
  //           this.handleSubscribe().subscribe({
  //             id,
  //             target: listViewItemElement,
  //           });
  //         } else {
  //           this.handleSubscribe().unsubscribe({
  //             id,
  //             target: listViewItemElement,
  //           });
  //         }
  //         this.handleSubscribe().updateCustomGridViewData();
  //       };
  //       const listView = this.shadowRoot
  //         ?.querySelector(`section.${tab} .view.list list-view-element`)
  //         ?.shadowRoot?.querySelector('list-view-item-element')
  //         ?.shadowRoot?.querySelector('.btn-container');

  //       listView?.addEventListener('click', (e) => handleClick(e));
  //     },
  //   };
  // }
}

export default PressListContents;
