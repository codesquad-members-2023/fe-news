export default function style() {
  const style = document.createElement('style');

  const content = `
    .tab-wrap {
      height: 40px;
      display: flex;
      background-color: var(--offwhite);
      border-bottom: 1px solid var(--gray100);
    }
    `;

  style.textContent = content;
  return style;
}
