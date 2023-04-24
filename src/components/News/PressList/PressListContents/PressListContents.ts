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
} from '@utils/dom';
import list from './PressListContentsStyle';
import { StoreType } from '@utils/redux';
import store from '@store/index';
import { getUser, subscribeAPI, unsubscribeAPI } from '@apis/user';
import { TEMP_ID } from '@constant/index';
import { UserType } from '@store/user/userType';
import { getPressList, getCustomPressList } from '@services/press/press';
import { getSection, getCustomSection } from '@services/section/section';
import { NewsType, TAB, VIEW } from '@store/news/newsType';

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

  render() {
    const template = `
    <section class="general show">
      <div class="view grid show">
      </div>
      <div class="view list">
      </div>
    </section>
    <section class="custom">
      <div class="view grid">
      </div>
      <div class="view list">
      </div>
    </section>
    `;

    add({
      target: this.wrap,
      template,
    });
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

    const userData = await getUser({ id: TEMP_ID });
    this.userStore.dispatch({ type: 'SET_USER', payload: userData[0] });

    this.handleDisplay();
    this.renderGridView({ tab: TAB.GENERAL });
    this.renderGridView({ tab: TAB.CUSTOM });
    this.renderListView({ tab: TAB.GENERAL });
    this.renderListView({ tab: TAB.CUSTOM });
  }

  async renderGridView({ tab }: { tab: TAB }) {
    let pressList;
    const newsStore = this.newsStore;
    if (tab === 'general') {
      await getPressList({
        newsStore,
      });
      pressList = this.newsStore.getState().press.pressList;
    }
    if (tab === 'custom') {
      await getCustomPressList({
        newsStore,
      });
      pressList = newsStore.getState().press.customPressList;
    }
    const gridViewContainer = create({
      tagName: 'grid-view-container-element',
      attributeList: [['press-list', JSON.stringify(pressList)]],
    });

    this.shadowRoot
      ?.querySelector(`section.${tab}`)
      ?.querySelector('.view.grid')
      ?.prepend(gridViewContainer);

    this.handlePageController().appendController(tab, VIEW.GRID);
    this.handlePageController().movePage(tab, VIEW.GRID);
    this.handleSubscribe().addClickEvnetToGridView(tab);
  }

  async renderListView({ tab, page = 0 }: { tab: TAB; page?: number }) {
    let section;
    const newsStore = this.newsStore;
    const userStore = this.userStore;
    if (tab === 'general') {
      await getSection({ newsStore, page: 0 });
    }
    if (tab === 'custom') {
      await getCustomSection({
        userStore,
        newsStore,
        page: 0,
      });
    }
    section = this.newsStore.getState().section.section;
    const listViewContainer = create({
      tagName: 'div',
      classList: ['list-view-container'],
      attributeList: [['page', `${page}`]],
    });
    const listViewElement = create({
      tagName: 'list-view-element',
      classList: ['list-view-container'],
      attributeList: [['section-data', JSON.stringify(section)]],
    });
    listViewContainer?.prepend(listViewElement);
    this.shadowRoot
      ?.querySelector(`section.${tab}`)
      ?.querySelector('.view.list')
      ?.prepend(listViewContainer);

    this.handlePageController().appendController(tab, VIEW.LIST);
    this.handlePageController().movePage(tab, VIEW.LIST);
    this.handleSubscribe().addClickEvnetToListView(tab);
    this.handleListView().handleTab(tab);
  }

  handleListView() {
    const userStore = this.userStore;
    const newsStore = this.newsStore;
    const section = this.newsStore.getState().section.section;

    return {
      updateSection: async (page: number) => {
        await getSection({ newsStore, page });
        this.shadowRoot
          ?.querySelector('section.general .view.list list-view-element')
          ?.setAttribute('section-data', JSON.stringify(section));
        this.handleSubscribe().addClickEvnetToListView();
      },
      updateCustomSection: async (page: number) => {
        await getCustomSection({ userStore, newsStore, page });
        this.shadowRoot
          ?.querySelector('section.custom .view.list list-view-element')
          ?.setAttribute('section-data', JSON.stringify(section));
        this.handleSubscribe().addClickEvnetToListView('custom');
      },

      handleTab(tab: 'general' | 'custom') {
        const tabElements = document
          .querySelector('news-element')
          ?.shadowRoot?.querySelector('press-list-element')
          ?.shadowRoot?.querySelector('presslist-contents-element')
          ?.shadowRoot?.querySelector(`section.${tab} .view.list`)
          ?.querySelector('list-view-element')
          ?.shadowRoot?.querySelector('list-view-tab-element')?.shadowRoot;

        tabElements?.addEventListener('click', (e) => {
          this.handleTabClick.bind(this, e, tab);
        });

        return {};
      },
      handleTabClick(e: Event, tab: 'general' | 'custom') {
        const target = e.target as HTMLElement;
        const isCustom = tab === 'custom';
        console.log(target);
        if (isCustom) {
          const id = getProperty({ target, name: 'id' });
          const subscribingPressIndex = userStore
            .getState()
            .subscribingPressId.findIndex((pressId) => pressId === id);
          this.updateSection(subscribingPressIndex);
        }
      },
    };
  }

  async handleDisplay() {
    const toggleShowClass = async () => {
      const { currentTab, currentView } = this.newsStore.getState().display;

      const displaySection = this.wrap?.querySelector(`section.${currentTab}`);
      const hideSection =
        displaySection?.nextElementSibling ??
        displaySection?.previousElementSibling;

      if (displaySection && hideSection) {
        toggleClass(displaySection, 'show');
        toggleClass(hideSection, 'hide');
      }

      const displayView = this.wrap?.querySelector(
        `section.${currentTab} .view.${currentView}`
      );
      const hideView =
        displayView?.nextElementSibling ?? displayView?.previousElementSibling;

      if (displaySection && hideSection && displayView && hideView) {
        toggleClass(displayView, 'show');
        toggleClass(hideView, 'hide');
      }
    };
    this.newsStore.subscribe(toggleShowClass);
  }

  handlePageController() {
    return {
      handleClick: (e: any, view: VIEW, tab: TAB, controllerElement: any) => {
        const target = e.target;
        const position = target.getAttribute('position');
        const isLeft = position === 'left';

        if (!isLeft) {
          this.newsStore.dispatch({
            type: 'NEXT_PAGE',
            payload: { view, tab },
          });
        } else {
          this.newsStore.dispatch({
            type: 'PREV_PAGE',
            payload: { view, tab },
          });
        }

        const currentPage = this.newsStore.getState().display.currentPage;
        const totalPage =
          this.newsStore.getState().display.totalPage[view][tab];

        const isLastPage = currentPage === totalPage;
        const isFirstPage = currentPage === 0;
        const isOnePage = totalPage === 1;
        const isGirdView = view === 'grid';

        if (isOnePage) {
          setProperty({
            target: controllerElement,
            name: 'hide',
            value: 'all',
          });
        } else if (isLastPage && isGirdView) {
          setProperty({
            target: controllerElement,
            name: 'hide',
            value: 'right',
          });
        } else if (isFirstPage && isGirdView) {
          setProperty({
            target: controllerElement,
            name: 'hide',
            value: 'left',
          });
        } else {
          setProperty({
            target: controllerElement,
            name: 'hide',
            value: 'false',
          });
        }

        const changeVisibility = (view: 'grid' | 'list') => {
          const displayContainer = this.wrap?.querySelector(
            `.${view}-view-container.show`
          );
          const newDisplayContainer = this.wrap?.querySelector(
            `.${view}-view-container[page='${currentPage}']`
          );
          displayContainer?.classList.remove('show');
          newDisplayContainer?.classList.add('show');
        };
        changeVisibility(view);

        if (view === 'list') {
          if (tab === 'general') {
            this.handleListView().updateSection(currentPage);
          } else {
            this.handleListView().updateCustomSection(currentPage);
          }
        }
      },
      movePage: (tab: TAB, view: VIEW) => {
        const controllerElement = select({
          selector: ['controller-element'],
          parent: document
            .querySelector('news-element')
            ?.shadowRoot?.querySelector('press-list-element')
            ?.shadowRoot?.querySelector('presslist-contents-element')
            ?.shadowRoot?.querySelector(`section.${tab} .view.${view}`),
        });
        controllerElement?.shadowRoot?.addEventListener('click', (e) =>
          this.handlePageController().handleClick(
            e,
            view,
            tab,
            controllerElement
          )
        );
      },
      appendController: (tab: TAB, view: VIEW) => {
        const isOnePage =
          this.newsStore.getState().display.totalPage[view][tab] === 1;
        const isList = view === 'list';
        const hide = isOnePage ? 'all' : isList ? 'none' : 'left';
        const controller = create({
          tagName: 'controller-element',
          attributeList: [['hide', hide]],
        });
        this.shadowRoot
          ?.querySelector(`section.${tab}`)
          ?.querySelector(`.view.${view}`)
          ?.prepend(controller);
      },
    };
  }

  handleSubscribe() {
    const storeUser = store.user;
    interface runSubscribeProps {
      id: string;
      target: HTMLElement | null | undefined | Element;
    }
    return {
      getCustomPressList: () => {
        const subscribingPressIds =
          this.userStore.getState().subscribingPressId;
        const pressList = this.newsStore.getState().press.pressList;
        const customPressList = pressList.filter((press: any) =>
          subscribingPressIds.includes(press.pid)
        );
        this.newsStore.dispatch({
          type: 'SET_CUSTOM_PRESS_LIST',
          payload: { pressList: customPressList },
        });
      },
      unsubscribe: ({ id, target }: runSubscribeProps) => {
        unsubscribeAPI({ id: TEMP_ID, pressId: id });
        storeUser.dispatch({
          type: 'UNSUBSCRIBE',
          payload: id,
        });
        this.newsStore.dispatch({
          type: 'UNSUBSCRIBE',
          payload: id,
        });
        setProperty({
          target,
          name: 'is-subscribed',
          value: 'false',
        });
      },
      subscribe: ({ id, target }: runSubscribeProps) => {
        subscribeAPI({ id, pressId: id });
        storeUser.dispatch({
          type: 'SUBSCRIBE',
          payload: id,
        });
        this.newsStore.dispatch({
          type: 'SUBSCRIBE',
          payload: id,
        });
        setProperty({
          target,
          name: 'is-subscribed',
          value: 'true',
        });
      },

      updateCustomGridViewData: () => {
        this.handleSubscribe().getCustomPressList();
        const customPressList = this.newsStore.getState().press.customPressList;
        const gridViewContainerElement = this.shadowRoot
          ?.querySelector(`section.custom`)
          ?.querySelector('.view.grid')
          ?.querySelector('grid-view-container-element');
        setProperty({
          target: gridViewContainerElement,
          name: 'press-list',
          value: JSON.stringify(customPressList),
        });
        this.handleSubscribe().addClickEvnetToGridView('custom');
      },
      addClickEvnetToGridView: (tab: 'general' | 'custom' = 'general') => {
        const handleClick = (e: Event) => {
          const target = e.target as HTMLElement;
          const gridViewItem = target.closest('grid-view-item-element');
          const id = gridViewItem?.getAttribute('id');
          if (!id) return;
          const isSubscribed = target.getAttribute('icon') === 'close';
          const gridViewItemElement = target?.closest('grid-view-item-element');
          isSubscribed
            ? this.handleSubscribe().unsubscribe({
                id,
                target: gridViewItemElement,
              })
            : this.handleSubscribe().subscribe({
                id,
                target: gridViewItemElement,
              });
          this.handleSubscribe().updateCustomGridViewData();
        };
        const gridView = this.shadowRoot
          ?.querySelector(`section.${tab}`)
          ?.querySelector('.view.grid')
          ?.querySelector('grid-view-container-element')
          ?.shadowRoot?.querySelectorAll('grid-view-element');
        gridView?.forEach((gridViewElement) => {
          gridViewElement.shadowRoot?.addEventListener('click', (e) =>
            handleClick(e)
          );
        });
      },
      addClickEvnetToListView: (tab: 'general' | 'custom' = 'general') => {
        const handleClick = (e: Event) => {
          const target = e.target as HTMLElement;
          const id = target?.getAttribute('id');
          if (!id) return;
          const isSubscribed = target.getAttribute('icon') === 'close';
          const listViewItemElement = document
            .querySelector('news-element')
            ?.shadowRoot?.querySelector('press-list-element')
            ?.shadowRoot?.querySelector('presslist-contents-element')
            ?.shadowRoot?.querySelector(`section.${tab}`)
            ?.querySelector('.view.list')
            ?.querySelector('list-view-element')
            ?.shadowRoot?.querySelector('list-view-item-element');
          if (!isSubscribed) {
            this.handleSubscribe().subscribe({
              id,
              target: listViewItemElement,
            });
          } else {
            this.handleSubscribe().unsubscribe({
              id,
              target: listViewItemElement,
            });
          }
          this.handleSubscribe().updateCustomGridViewData();
        };
        const listView = this.shadowRoot
          ?.querySelector(`section.${tab} .view.list list-view-element`)
          ?.shadowRoot?.querySelector('list-view-item-element')
          ?.shadowRoot?.querySelector('.btn-container');

        listView?.addEventListener('click', (e) => handleClick(e));
      },
    };
  }
}

export default PressListContents;
