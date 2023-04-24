export default function style(currentPage?: number) {
  const style = document.createElement('style');

  let translateX = 0;

  if (currentPage && currentPage >= 10) {
    const target = document
      .querySelector('news-element')
      ?.shadowRoot?.querySelector('press-list-element')
      ?.shadowRoot?.querySelector('presslist-contents-element')
      ?.shadowRoot?.querySelector('section.show .view.show list-view-element')
      ?.shadowRoot?.querySelector('list-view-tab-element')
      ?.shadowRoot?.querySelector('.tab-wrap');

    const width = target ? target.clientWidth : 0;
    const scrollWidth = target ? target.scrollWidth : 0;
    translateX = (scrollWidth - width) * -1;
  }

  const content = `
    :host {
      min-height: 40px;
      display: flex;
      overflow-x: hidden;
      background-color: var(--offwhite);
      border-bottom: 1px solid var(--gray100);
    }

    .tab-wrap {
      height: 40px;
      display: flex;
      transform: translateX(${translateX}px);
    }
    `;

  style.textContent = content;
  return style;
}
