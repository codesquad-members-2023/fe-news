import { add, addStyle, addShadow, getProperty } from '@utils/dom';
import ListViewStyle from './PressListStyle';
import { useState } from '@utils/hooks';
import { TabType, Tab } from '@type/news';

interface PressList {
  icon?: string | null;
}

class PressList extends HTMLElement {
  connectedCallback() {
    addShadow({ target: this });
    this.render();
    this.handleClick();
  }

  handleClick = () => {
    const [getCurrentTab, setCurrentTab, subscribeCurrentTab] =
      useState<TabType>(Tab[0]);
    subscribeCurrentTab(() => {
      const currnetTab = getCurrentTab();
      this.shadowRoot
        ?.querySelector('presslist-contents-element')
        ?.setAttribute('current-tab', currnetTab);
    });

    const tab = this.shadowRoot
      ?.querySelector('presslist-header-element')
      ?.shadowRoot?.querySelector('button:not(.is-active)');

    tab?.addEventListener('click', (e) => {
      const unActiveTabElement = e.currentTarget as HTMLElement;
      const unAcitveTab = unActiveTabElement.innerText;
      setCurrentTab(unAcitveTab as TabType);
    });
  };

  render() {
    const template = `
    <presslist-header-element></presslist-header-element>
    <presslist-contents-element current-tab="${Tab[0]}"></presslist-contents-element>
    `;

    add({
      target: this.shadowRoot,
      template,
    });
    addStyle({
      target: this.shadowRoot,
      style: new ListViewStyle({ target: this }).element,
    });
  }
}

export default PressList;
