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
import { getPress, getSection } from '@apis/news';
import { getUser, subscribe, unsubscribe } from '@apis/user';
import { parseQuotationMarks } from '@utils/parser';
import { ArticleInterface, SectionType } from '@store/section/sectionType';
import { PressListType } from '@store/press/pressType';
import { isFirstPage, sliceByPage } from '@utils/common';
import { TEMP_ID } from '@constant/index';
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
  sectionStore: StroeType<SectionType>;
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
      <div class="view grid show">
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
    this.handleGridView().appendGridViewContainer();
    console.log(this.pressStore.getState());
    this.handleListView().appendListViewContainer();
  }

  handleGridView() {
    return {
      getCurrentPressList: async (tab: 'general' | 'custom' = 'general') => {
        const pressList = await getPress();
        this.displayStore.dispatch({
          type: 'SET_TOTAL_PAGE',
          payload: {
            view: 'grid',
            tab,
            totalPage: Math.ceil(pressList.length / 24),
          },
        });
        this.pressStore.dispatch({
          type: 'SET_PRESS_LIST',
          payload: { pressList },
        });
        console.log(this.pressStore.getState());
      },

      createGridViewContainer: (page: number, pressList: any) => {
        const gridViewContainer = create({
          tagName: 'grid-view-container-element',
          classList: ['grid-view-container'],
          attributeList: [['press-list', JSON.stringify(pressList)]],
        });
        if (isFirstPage(page)) {
          gridViewContainer.classList.add('show');
        }
        // const slicedPressList = sliceByPage({
        //   page,
        //   maxItemNum: 24,
        //   items: pressList,
        // });
        // const template = `
        //   <grid-view-container-element press-list='${JSON.stringify(
        //     slicedPressList
        //   )}'></grid-view-container-element>
        // `;
        // add({
        //   target: gridViewContainer,
        //   template,
        // });
        // return gridViewContainer;
      },
      appendGridViewContainer: async () => {
        await this.handleGridView().getCurrentPressList();
        const maxPage =
          this.displayStore.getState().page.grid.general.totalPage;
        const pressList: any = this.pressStore.getState().pressList;
        const gridViewContainer = create({
          tagName: 'grid-view-container-element',
          attributeList: [['press-list', JSON.stringify(pressList)]],
        });
        const controller = create({
          tagName: 'controller-element',
          attributeList: [['hide', 'left']],
        });
        this.shadowRoot
          ?.querySelector('section.general')
          ?.querySelector('.view.grid')
          ?.prepend(gridViewContainer);
        this.shadowRoot
          ?.querySelector('section.general')
          ?.querySelector('.view.grid')
          ?.prepend(controller);
        this.handlePageController('grid');
        // this.handleGridView().appendGridViewContainerForCustomTab();
      },
      appendGridViewContainerForCustomTab: () => {
        const subscribingPress = this.userStore.getState().subscribingPress;
        const pressList = this.pressStore.getState();

        const customPressList = this.pressStore
          .getState()
          .pressList.filter((press) => subscribingPress.includes(press.pid));

        // const gridViewContainer = this.handleGridView().createGridViewContainer(
        //   0,
        //   customPressList
        // );

        // const target = this.wrap?.querySelector('section.custom .view.grid');
        // if (target) target.innerHTML = '';
        // target?.append(gridViewContainer);
        // this.handleSubscribe().handleGridView();
        // this.handleGridView().updateCustomTabGridData();
      },
      updateCustomTabGridData: () => {
        this.displayStore.subscribe(() => {});
      },
    };
  }

  handleListView() {
    return {
      createListViewContainer: async (page: number) => {
        const listViewContainer = create({ tagName: 'div' });
        listViewContainer.classList.add('list-view-container');
        listViewContainer.setAttribute('page', `${page}`);
        if (page === 0) {
          listViewContainer.classList.add('show');
        }
        const currentSection = await this.handleListView().getCurrentSection({
          page: 0,
        });
        currentSection.articles.forEach((article: ArticleInterface) => {
          article.title = parseQuotationMarks(article.title);
        });
        const template = `
        <list-view-element section-data='${JSON.stringify(
          currentSection
        )}'></list-view-element>
        `;
        const gridViewContainer = this.wrap?.querySelector(
          'section.general .view.list'
        );

        add({
          target: listViewContainer,
          template,
        });

        this.wrap
          ?.querySelector('section.general .view.list')
          ?.append(listViewContainer);
        this.handleSubscribe().handleListView();
      },
      getCurrentSection: async ({ page }: getCurrentSectionProps) => {
        const section = await getSection({ page });
        return section;
      },
      changeCurrentSection: async (page: number) => {
        const data = await getSection({ page });
        this.sectionStore.dispatch({ type: 'CHANGE_SECTION', payload: data });
        this.shadowRoot
          ?.querySelector('list-view-element')
          ?.setAttribute(
            'section-data',
            JSON.stringify(this.sectionStore.getState())
          );
        this.handleSubscribe().handleListView();
      },
      appendListViewContainer: () => {
        this.handleListView().createListViewContainer(0);
        const controller = create({ tagName: 'controller-element' });
        setProperty({ target: controller, name: 'hide', value: 'left' });
        this.shadowRoot
          ?.querySelector('section.general')
          ?.querySelector('.view.list')
          ?.append(controller);
        this.handlePageController('list');
      },
    };
  }

  async handleDisplay() {
    // 탭이 변화하면 감지하여 그에 맞는 컨텐츠를 보여줌
    // 자식 컴포넌트에서 custom event 발생하면 변경하는 것으로 코드 수정 필요

    const toggleShowClass = async () => {
      const displayStates = this.displayStore.getState();
      const isGeneral = displayStates.currentTab === 'general';
      const isCustom = displayStates.currentTab === 'custom';
      const isGrid = displayStates.currentView === 'grid';
      const isList = displayStates.currentView === 'list';

      const generalSection = this.wrap?.querySelector('section.general');
      const customSection = this.wrap?.querySelector('section.custom');
      const gridView = this.wrap?.querySelector('section.show .view.grid');
      const listView = this.wrap?.querySelector('section.show .view.list');
      if (!generalSection || !customSection || !gridView || !listView) {
        return;
      }
      if (isGeneral) {
        toggleClass(generalSection, 'show');
        toggleClass(customSection, 'hide');
      }
      if (isCustom) {
        toggleClass(generalSection, 'hide');
        toggleClass(customSection, 'show');
      }
      if (isGrid) {
        toggleClass(gridView, 'show');
        toggleClass(listView, 'hide');
      }
      if (isList) {
        toggleClass(gridView, 'hide');
        toggleClass(listView, 'show');
      }
    };
    this.displayStore.subscribe(toggleShowClass);
  }

  handlePageController(view: 'grid' | 'list') {
    const tab = this.displayStore.getState().currentTab;

    const controllerElement = select({
      selector: 'controller-element',
      parent: document
        .querySelector('news-element')
        ?.shadowRoot?.querySelector('press-list-element')
        ?.shadowRoot?.querySelector('presslist-contents-element')
        ?.shadowRoot?.querySelector(`section.${tab} .view.${view}`),
    });

    controllerElement?.shadowRoot?.addEventListener('click', (e: any) => {
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
      const totalPage = this.displayStore.getState().page[view][tab].totalPage;
      const isLastPage = currentPage === totalPage - 1;
      const isFirstPage = currentPage === 0;

      if (isLastPage) {
        setProperty({
          target: controllerElement,
          name: 'hide',
          value: 'right',
        });
      } else if (isFirstPage) {
        setProperty({ target: controllerElement, name: 'hide', value: 'left' });
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
        this.sectionStore = store.section;
        store.section.dispatch;
        this.handleListView().changeCurrentSection(currentPage);
      }
    });
  }

  handleSubscribe() {
    const storeUser = store.user;
    interface runSubscribeProps {
      id: string;
      target: HTMLElement | null | undefined | Element;
    }
    return {
      runUnsunscribe: ({ id, target }: runSubscribeProps) => {
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
      runSubscribe: ({ id, target }: runSubscribeProps) => {
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
      handleGridView: () => {
        const gridView = this.shadowRoot?.querySelectorAll('grid-view-element');
        gridView?.forEach((gridViewElement) => {
          gridViewElement.shadowRoot?.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            const gridViewItem = target.closest('grid-view-item-element');
            const id = gridViewItem?.getAttribute('id');
            if (!id) return;
            const isSubscribed = target.getAttribute('icon') === 'close';
            const gridViewItemElement = target?.closest(
              'grid-view-item-element'
            );
            isSubscribed
              ? this.handleSubscribe().runUnsunscribe({
                  id,
                  target: gridViewItemElement,
                })
              : this.handleSubscribe().runSubscribe({
                  id,
                  target: gridViewItemElement,
                });
          });
        });
      },
      handleListView: () => {
        const listView = this.shadowRoot
          ?.querySelector('list-view-element')
          ?.shadowRoot?.querySelector('list-view-item-element')
          ?.shadowRoot?.querySelector('.btn-container');

        listView?.addEventListener('click', (e) => {
          const target = e.target as HTMLElement;
          const id = target?.getAttribute('id');

          const subscribingPress = storeUser.getState().subscribingPress;
          if (!id) return;
          const isSubscribed = subscribingPress.includes(id);

          const listViewItemElement = document
            .querySelector('news-element')
            ?.shadowRoot?.querySelector('press-list-element')
            ?.shadowRoot?.querySelector('presslist-contents-element')
            ?.shadowRoot?.querySelector('section.show')
            ?.querySelector('.view.show')
            ?.querySelector('list-view-element')
            ?.shadowRoot?.querySelector('list-view-item-element');

          if (!isSubscribed) {
            this.handleSubscribe().runSubscribe({
              id,
              target: listViewItemElement,
            });
          } else {
            this.handleSubscribe().runUnsunscribe({
              id,
              target: listViewItemElement,
            });
          }
        });
      },
    };
  }
}

export default PressListContents;
