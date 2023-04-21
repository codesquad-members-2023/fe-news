import {
  add,
  addStyle,
  addShadow,
  select,
  create,
  createWrap,
  toggleClass,
  setProperty,
} from '@utils/dom';
import list from './PressListContentsStyle';
import { StroeType } from '@utils/redux';
import { DisplayType } from '@store/display/displayType';
import store from '@store/index';
import { getPress, getSection, getCustomSection } from '@apis/news';
import { getUser, subscribe, unsubscribe } from '@apis/user';
import { parseQuotationMarks } from '@utils/parser';
import { ArticleInterface, SectionInfoType } from '@store/section/sectionType';
import { PressListType } from '@store/press/pressType';
import { isFirstPage, sliceByPage } from '@utils/common';
import { MAX_ITEM_NUM, TEMP_ID } from '@constant/index';
import { UserType } from '@store/user/userType';

interface PressListContents {
  icon?: string | null;
}

interface getCurrentSectionProps {
  page: number;
}

class PressListContents extends HTMLElement {
  wrap: HTMLElement | null = null;
  displayStore: StroeType<DisplayType>;
  sectionStore: StroeType<SectionInfoType>;
  userStore: StroeType<UserType>;
  pressStore: StroeType<PressListType>;
  pressList: any[] = [];
  section: any;

  constructor() {
    super();
    this.pressList = [];
    this.section = null;
    this.displayStore = store.display;
    this.sectionStore = store.section;
    this.pressStore = store.press;
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
    this.handleGridView().append('general');
    this.handleGridView().append('custom');
    this.handleListView().append('general');
    this.handleListView().append('custom');
  }

  handleGridView() {
    return {
      getPressList: async () => {
        let pressList = await getPress();
        pressList = pressList.slice(0, MAX_ITEM_NUM * 4);
        this.displayStore.dispatch({
          type: 'SET_TOTAL_PAGE',
          payload: {
            view: 'grid',
            tab: 'general',
            totalPage: Math.ceil(pressList.length / 24),
          },
        });
        this.pressStore.dispatch({
          type: 'SET_PRESS_LIST',
          payload: { pressList },
        });
      },
      getCustomPressList: async () => {
        const pressList = await getPress();
        const user = await getUser({ id: TEMP_ID });
        const subscribingPressIds = user[0].subscribingPressIds;
        const customPressList = subscribingPressIds.reduce(
          (result: any, id: string) => {
            const press = pressList.find((press: any) => {
              return press.pid === id;
            });
            return [...result, press];
          },
          []
        );
        this.displayStore.dispatch({
          type: 'SET_TOTAL_PAGE',
          payload: {
            view: 'grid',
            tab: 'custom',
            totalPage: Math.ceil(customPressList.length / 24),
          },
        });
        this.pressStore.dispatch({
          type: 'SET_CUSTOM_PRESS_LIST',
          payload: { pressList: customPressList },
        });
      },
      append: async (tab: 'general' | 'custom') => {
        let pressList;
        if (tab === 'general') {
          await this.handleGridView().getPressList();
          pressList = this.pressStore.getState().pressList;
        }
        if (tab === 'custom') {
          await this.handleGridView().getCustomPressList();
          pressList = this.pressStore.getState().customPressList;
        }
        const gridViewContainer = create({
          tagName: 'grid-view-container-element',
          attributeList: [['press-list', JSON.stringify(pressList)]],
        });
        this.shadowRoot
          ?.querySelector(`section.${tab}`)
          ?.querySelector('.view.grid')
          ?.prepend(gridViewContainer);

        this.handlePageController().appendController(tab, 'grid');
        this.handlePageController().movePage(tab, 'grid');

        this.handleSubscribe().addClickEvnetToGridView(tab);
      },
      updateCustomTabGridData: () => {
        this.displayStore.subscribe(() => {});
      },
    };
  }

  handleListView() {
    return {
      getSection: async (page: number = 0) => {
        const section = await getSection({ page });
        this.sectionStore.dispatch({
          type: 'SET_SECTION',
          payload: section,
        });
        this.sectionStore
          .getState()
          .section.articles.forEach((article: ArticleInterface) => {
            article.title = parseQuotationMarks(article.title);
          });
        this.displayStore.dispatch({
          type: 'SET_TOTAL_PAGE',
          payload: {
            view: 'list',
            tab: 'general',
            totalPage: this.sectionStore.getState().totalNumber - 1,
          },
        });
        this.sectionStore.dispatch({ type: 'SET_SECTION', payload: section });
      },
      getCustomSection: async (page: number = 0) => {
        if (this.userStore.getState().subscribingPress.length === page) {
          const section = await getCustomSection({ page: 0 });
          this.displayStore.dispatch({
            type: 'SET_CURRENT_PAGE',
            payload: {
              view: 'list',
              tab: 'custom',
              currentPage: 0,
            },
          });
          this.sectionStore.dispatch({
            type: 'SET_SECTION',
            payload: section,
          });
        } else {
          const section = await getCustomSection({ page });
          this.sectionStore.dispatch({
            type: 'SET_SECTION',
            payload: section,
          });
        }

        const section = this.sectionStore.getState();

        section.section.articles.forEach((article: ArticleInterface) => {
          article.title = parseQuotationMarks(article.title);
        });
        this.displayStore.dispatch({
          type: 'SET_TOTAL_PAGE',
          payload: {
            view: 'list',
            tab: 'custom',
            totalPage: this.userStore.getState().subscribingPress.length - 1,
          },
        });
        this.sectionStore.dispatch({ type: 'SET_SECTION', payload: section });
      },
      updateSection: async (page: number) => {
        await this.handleListView().getSection(page);
        const section = this.sectionStore.getState();
        this.shadowRoot
          ?.querySelector('section.general .view.list list-view-element')
          ?.setAttribute('section-data', JSON.stringify(section));
        this.handleSubscribe().addClickEvnetToListView();
      },
      updateCustomSection: async (page: number) => {
        await this.handleListView().getCustomSection(page);
        const section = this.sectionStore.getState();
        this.shadowRoot
          ?.querySelector('section.custom .view.list list-view-element')
          ?.setAttribute('section-data', JSON.stringify(section));
        this.handleSubscribe().addClickEvnetToListView('custom');
      },
      append: async (tab: 'general' | 'custom', page: number = 0) => {
        let section;
        if (tab === 'general') {
          await this.handleListView().getSection(0);
          section = this.sectionStore.getState();
        }
        if (tab === 'custom') {
          await this.handleListView().getCustomSection(0);
          section = this.sectionStore.getState();
        }
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

        this.handlePageController().appendController(tab, 'list');
        this.handlePageController().movePage(tab, 'list');
        this.handleSubscribe().addClickEvnetToListView(tab);
      },
    };
  }

  async handleDisplay() {
    const toggleShowClass = async () => {
      const displayStates = this.displayStore.getState();

      const displaySection = this.wrap?.querySelector(
        `section.${displayStates.currentTab}`
      );
      const hideSection =
        displaySection?.nextElementSibling ??
        displaySection?.previousElementSibling;

      if (displaySection && hideSection) {
        toggleClass(displaySection, 'show');
        toggleClass(hideSection, 'hide');
      }

      const displayView = this.wrap?.querySelector(
        `section.${displayStates.currentTab} .view.${displayStates.currentView}`
      );
      const hideView =
        displayView?.nextElementSibling ?? displayView?.previousElementSibling;

      if (displaySection && hideSection && displayView && hideView) {
        toggleClass(displayView, 'show');
        toggleClass(hideView, 'hide');
      }
    };
    this.displayStore.subscribe(toggleShowClass);
  }

  handlePageController() {
    return {
      handleClick: (
        e: any,
        view: 'grid' | 'list',
        tab: 'general' | 'custom',
        controllerElement: any
      ) => {
        const target = e.target;
        const position = target.getAttribute('position');
        const isLeft = position === 'left';

        if (!isLeft) {
          this.displayStore.dispatch({
            type: 'NEXT_PAGE',
            payload: { view, tab },
          });
        } else {
          this.displayStore.dispatch({
            type: 'PREV_PAGE',
            payload: { view, tab },
          });
        }

        const currentPage =
          this.displayStore.getState().page[view][tab].currentPage;
        const totalPage =
          this.displayStore.getState().page[view][tab].totalPage;

        const isLastPage = currentPage === totalPage - 1;
        const isFirstPage = currentPage === 0;
        const isOnePage = totalPage === 1;
        const isGirdView = view === 'grid';

        if (isOnePage) {
          setProperty({
            target: controllerElement,
            name: 'hide',
            value: 'all',
          });
        } else if (isLastPage) {
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
      movePage: (tab: 'general' | 'custom', view: 'grid' | 'list') => {
        const controllerElement = select({
          selector: 'controller-element',
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
      appendController: (tab: 'general' | 'custom', view: 'grid' | 'list') => {
        const isOnePage =
          this.displayStore.getState().page[view][tab].totalPage === 1;
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
        const subscribingPressIds = this.userStore.getState().subscribingPress;
        const pressList = this.pressStore.getState().pressList;
        const customPressList = pressList.filter((press: any) =>
          subscribingPressIds.includes(press.pid)
        );
        this.pressStore.dispatch({
          type: 'SET_CUSTOM_PRESS_LIST',
          payload: { pressList: customPressList },
        });
      },
      unsubscribe: ({ id, target }: runSubscribeProps) => {
        unsubscribe({ id: TEMP_ID, pressId: id });
        storeUser.dispatch({
          type: 'UNSUBSCRIBE',
          payload: id,
        });
        this.pressStore.dispatch({
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
        subscribe({ id, pressId: id });
        storeUser.dispatch({
          type: 'SUBSCRIBE',
          payload: id,
        });
        this.pressStore.dispatch({
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
        const customPressList = this.pressStore.getState().customPressList;
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
