export default function style() {
  const style = document.createElement('style');

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
    }
    `;

  style.textContent = content;
  return style;
}
