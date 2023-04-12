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
import list from './PressListContentsStyle';
import { TabType, Tab } from '@type/news';
import { StroeType } from '@utils/redux';
import { DisplayType } from '@store/display/displayType';
import store from '@store/index';
import { getPress } from '@apis/news';
import { useState } from '@utils/hooks';
import { createCurrentPageIndex } from '@utils/common';

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
    ${Array.from({ length: this.maxPage + 1 }, (_, i) => i)
      .map(
        (page) => `
      <div class="grid-view-container${
        page === 0 ? ' show' : ''
      }" page='${page}'>
        <grid-view-element press-list='${JSON.stringify(
          this.getCurrentPressList(page)
        )}'></grid-view-element>
      </div>`
      )
      .join('')}
    </section>
    <section class="custom">
      ${Array.from({ length: 1 }, (_, i) => i)
        .map(
          (page) => `
      <div class="grid-view-container${
        page === 0 ? ' show' : ''
      }" page='${page}'>
        <grid-view-element press-list='${JSON.stringify(
          this.getCurrentPressList(page)
        )}'></grid-view-element>
      </div>`
        )
        .join('')}
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
    const rerender = async () => {
      // const newTab = this.displayStore.getState().tab;
      // const activeTab = newTab.find((menu: any) => menu.isActive);
      // const target = select({
      //   selector: 'grid-view-element',
      //   parent: this.shadowRoot,
      // });
      // const isAllTab = activeTab?.name === newTab[0].name;

      // const pressList = isAllTab
      //   ? this.pressList
      //   : store.user.getState().subscribingPress;

      // activeTab &&
      //   setProperty({
      //     target,
      //     name: 'press-list',
      //     value: JSON.stringify(pressList),
      //   });

      this.wrap?.querySelectorAll('section').forEach((section) => {
        section.classList.toggle('show');
      });
    };
    this.displayStore.subscribe(rerender);
  }
}

export default PressListContents;
