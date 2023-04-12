import {
  add,
  addStyle,
  addShadow,
  select,
  create,
  createWrap,
} from '@utils/dom';
import list from './PressListContentsStyle';
import { StroeType } from '@utils/redux';
import { DisplayType } from '@store/display/displayType';
import store from '@store/index';
import { getPress } from '@apis/news';

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
    this.wrap?.querySelector('section.general')?.append(gridViewContainer);
  }

  getCurrentPressList(page: number) {
    const start = page * 24;
    const end = start + 24;
    return this.pressList.slice(start, end);
  }

  render() {
    const template = `
    <controller-element></controller-element>
    <section class="general show">
    </section>
    <section class="custom">
      custom
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
      console.log(displayContainer, newDisplayContainer);
      displayContainer?.classList.remove('show');
      newDisplayContainer?.classList.add('show');
    });
  }

  async changeCurrentTab() {
    const toggleShowClass = async () => {
      this.wrap?.querySelectorAll('section').forEach((section) => {
        section.classList.toggle('show');
      });
    };
    this.displayStore.subscribe(toggleShowClass);
  }
}

export default PressListContents;
