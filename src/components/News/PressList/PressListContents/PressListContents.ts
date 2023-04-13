import {
  add,
  addStyle,
  addShadow,
  select,
  create,
  createWrap,
  toggleClass,
} from '@utils/dom';
import list from './PressListContentsStyle';
import { StroeType } from '@utils/redux';
import { DisplayType } from '@store/display/displayType';
import store from '@store/index';
import { getPress, getSection } from '@apis/news';
import { parseQuotationMarks } from '@utils/parser';
import { ArticleInterface, SectionType } from '@store/section/sectionType';

interface PressListContents {
  icon?: string | null;
}

interface getCurrentSectionProps {
  page: number;
}

class PressListContents extends HTMLElement {
  wrap: HTMLElement | null = null;
  displayStore: StroeType<DisplayType>;
  pressList: any[] = [];
  section: any;

  constructor() {
    super();
    this.pressList = [];
    this.section = null;
    this.displayStore = store.display;
  }

  render() {
    const template = `
    <controller-element></controller-element>
    <section class="general show">
      <div class="view grid show"></div>
      <div class="view list"></div>
    </section>
    <section class="custom">
      <div class="view grid show"></div>
      <div class="view list"></div>
    </section>
    `;

    add({
      target: this.wrap,
      template,
    });

    this.handlePage();
  }

  async connectedCallback() {
    const pressList = await getPress({ page: 0 });
    this.pressList = pressList;
    this.displayStore.dispatch({
      type: 'SET_TOTAL_PAGE',
      payload: {
        view: 'grid',
        tab: 'general',
        totalPage: Math.ceil(pressList.length / 24),
      },
    });

    addShadow({ target: this });
    this.wrap = createWrap();
    this.shadowRoot?.append(this.wrap);
    this.render();
    addStyle({
      target: this.shadowRoot,
      style: list(),
    });

    this.changeContentsSubscribingDisplayChange();
    this.appendGridViewContainer();
    this.appendListViewContainer();
  }

  handlePage() {
    const controllerElement = select({
      selector: 'controller-element',
      parent: document
        .querySelector('news-element')
        ?.shadowRoot?.querySelector('press-list-element')
        ?.shadowRoot?.querySelector('presslist-contents-element')?.shadowRoot,
    });

    controllerElement?.shadowRoot?.addEventListener('click', (e: any) => {
      const tab = this.displayStore.getState().tab.general.isActive
        ? 'general'
        : 'custom';
      const view = this.displayStore.getState().view.grid.isActive
        ? 'grid'
        : 'list';

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

      console.log(this.displayStore.getState().page);

      const currentPage =
        this.displayStore.getState().page[view][tab].currentPage;

      const displayContainer = this.wrap?.querySelector(
        '.grid-view-container.show'
      );
      const newDisplayContainer = this.wrap?.querySelector(
        `.grid-view-container[page='${currentPage}']`
      );
      displayContainer?.classList.remove('show');
      newDisplayContainer?.classList.add('show');
    });
  }

  async changeContentsSubscribingDisplayChange() {
    // 탭이 변화하면 감지하여 그에 맞는 컨텐츠를 보여줌
    // 자식 컴포넌트에서 custom event 발생하면 변경하는 것으로 코드 수정 필요

    const toggleShowClass = async () => {
      const displayStates = this.displayStore.getState();
      const isGeneral = displayStates.tab.general.isActive;
      const isGrid = displayStates.view.grid.isActive;

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
        toggleClass(gridView, 'show');
        toggleClass(listView, 'hide');
      } else {
        toggleClass(generalSection, 'hide');
        toggleClass(customSection, 'show');
        toggleClass(gridView, 'hide');
        toggleClass(listView, 'show');
      }
      if (isGrid) {
        toggleClass(gridView, 'show');
        toggleClass(listView, 'hide');
      } else {
        toggleClass(gridView, 'hide');
        toggleClass(listView, 'show');
      }
    };
    this.displayStore.subscribe(toggleShowClass);
  }

  appendGridViewContainer() {
    const maxPage = this.displayStore.getState().page.grid.general.totalPage;
    Array.from({ length: maxPage }).forEach((_, i) => {
      this.createGridViewContainer(i);
    });
  }

  appendListViewContainer() {
    this.createListViewContainer(0);
  }

  async createListViewContainer(page: number) {
    const listViewContainer = create({ tagName: 'div' });
    listViewContainer.classList.add('grid-view-container');
    listViewContainer.setAttribute('page', `${page}`);
    if (page === 0) {
      listViewContainer.classList.add('show');
    }
    const currentSection = await this.getCurrentSection({ page: 0 });
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
      target: gridViewContainer ?? null,
      template,
    });
  }

  createGridViewContainer(page: number) {
    const gridViewContainer = create({ tagName: 'div' });
    gridViewContainer.classList.add('grid-view-container');
    gridViewContainer.setAttribute('page', `${page}`);
    if (page === 0) {
      gridViewContainer.classList.add('show');
    }
    const currentPressList = this.getCurrentPressList(page);

    const template = `
      <grid-view-element press-list='${JSON.stringify(
        currentPressList
      )}'></grid-view-element>
    `;

    add({
      target: gridViewContainer,
      template,
    });
    this.wrap
      ?.querySelector('section.general .view.grid')
      ?.append(gridViewContainer);
  }

  getCurrentPressList(page: number) {
    const start = page * 24;
    const end = start + 24;
    return this.pressList.slice(start, end);
  }

  async getCurrentSection({ page }: getCurrentSectionProps) {
    const section = await getSection({ page });
    return section;
  }
}

export default PressListContents;
