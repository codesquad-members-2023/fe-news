export default function style() {
  const style = document.createElement('style');

  const content = `
    :host {
      min-height: 40px;
      display: flex;
      overflow-x: scroll;
      background-color: var(--offwhite);
      border-bottom: 1px solid var(--gray100);
    }

    :host::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    :host::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0);
    }

    :host::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0);
    }

    .tab-wrap {
      height: 40px;
      display: flex;
    }
    `;

  style.textContent = content;
  return style;
}
