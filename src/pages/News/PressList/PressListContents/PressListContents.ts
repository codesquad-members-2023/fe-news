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

interface PressListContents {
  icon?: string | null;
}

class PressListContents extends HTMLElement {
  wrap: HTMLElement | null = null;
  currentPage: number = 0;
  pressList: any[] = [];
  maxPage: number = 0;
  displayStore: StroeType<DisplayType>;

  constructor() {
    super();

    this.currentPage = 0;
    this.pressList = [];
    this.maxPage = 0;
    this.displayStore = store.display;
  }

  async connectedCallback() {
    const pressList = await getPress({ page: 0 });
    this.pressList = pressList;
    this.maxPage = Math.ceil(pressList.length / 24) - 1;

    addShadow({ target: this });
    this.wrap = createWrap();
    this.shadowRoot?.append(this.wrap);
    this.render();
    addStyle({
      target: this.shadowRoot,
      style: list(),
    });

    this.changeCurrentTab();
    this.appendGridViewContainer();
  }

  appendGridViewContainer() {
    this.createGridViewContainer(0);

    let i = 1;
    const callInterval = setInterval(() => {
      this.createGridViewContainer(i);
      i++;
    }, 0);

    if (callInterval) {
      i === this.maxPage - 1 && clearInterval(callInterval);
    }
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

  createListViewContainer(page: number) {
    const listViewContainer = create({ tagName: 'div' });
    listViewContainer.classList.add('grid-view-container');
    listViewContainer.setAttribute('page', `${page}`);
    if (page === 0) {
      listViewContainer.classList.add('show');
    }
    const pressId = null;
    // const currentSection = this.getCurrentSection(pressId);

    const template = `
      <grid-view-element press-list='${JSON.stringify(
        'currentSection'
      )}'></grid-view-element>
    `;

    add({
      target: null,
      template,
    });
    // this.wrap
    //   ?.querySelector('section.general .view.grid')
    //   ?.append(gridViewContainer);
  }

  getCurrentPressList(page: number) {
    const start = page * 24;
    const end = start + 24;
    return this.pressList.slice(start, end);
  }

  async getCurrentSection(pressId: string) {
    const section = await getSection({ pressId });
    return section;
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

    this.handleClick();
  }

  handleClick() {
    const controllerElement = select({
      selector: 'controller-element',
      parent: document
        .querySelector('news-element')
        ?.shadowRoot?.querySelector('press-list-element')
        ?.shadowRoot?.querySelector('presslist-contents-element')?.shadowRoot,
    });

    controllerElement?.shadowRoot?.addEventListener('click', (e: any) => {
      const target = e.target;
      const position = target.getAttribute('position');
      const isLeft = position === 'left';
      const maxPage = Math.ceil(this.pressList.length / 24) - 1;

      if (!isLeft) {
        if (this.currentPage === maxPage) return;
        this.currentPage++;
      } else {
        if (this.currentPage === 0) return;
        this.currentPage--;
      }

      const displayContainer = this.wrap?.querySelector(
        '.grid-view-container.show'
      );
      const newDisplayContainer = this.wrap?.querySelector(
        `.grid-view-container[page='${this.currentPage}']`
      );
      displayContainer?.classList.remove('show');
      newDisplayContainer?.classList.add('show');
    });
  }

  async changeCurrentTab() {
    const toggleShowClass = async () => {
      const displayStates = this.displayStore.getState();
      const activeTab = displayStates.tab.find((tab) => tab.isActive)?.name;
      const activeView = displayStates.view.find((view) => view.isActive)?.name;
      const isGeneral = activeTab === '전체 언론사';
      const isGrid = activeView === 'gridView';

      const generalSection = this.wrap?.querySelector('section.general');
      const customSection = this.wrap?.querySelector('section.custom');
      const gridView = this.wrap?.querySelector('section.show .view.grid');
      const listView = this.wrap?.querySelector('section.show .view.list');

      if (isGeneral) {
        generalSection && toggleClass(generalSection, 'show');
        customSection && toggleClass(customSection, 'hide');
        gridView && toggleClass(gridView, 'show');
        listView && toggleClass(listView, 'hide');
      } else {
        generalSection && toggleClass(generalSection, 'hide');
        customSection && toggleClass(customSection, 'show');
        gridView && toggleClass(gridView, 'hide');
        listView && toggleClass(listView, 'show');
      }

      if (isGrid) {
        gridView && toggleClass(gridView, 'show');
        listView && toggleClass(listView, 'hide');
      } else {
        gridView && toggleClass(gridView, 'hide');
        listView && toggleClass(listView, 'show');
      }
    };
    this.displayStore.subscribe(toggleShowClass);
  }
}

export default PressListContents;
