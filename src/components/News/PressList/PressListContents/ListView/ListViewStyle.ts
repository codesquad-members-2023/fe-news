export default function style() {
  const style = document.createElement('style');

  const content = `
    .listview-container {
      display: flex;
      flex-direction: column;
      height: var(--presslist-content-height);
    }
    `;

  style.textContent = content;
  return style;
}
