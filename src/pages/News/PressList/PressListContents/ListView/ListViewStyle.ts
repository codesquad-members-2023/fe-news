export default function style() {
  const style = document.createElement('style');

  const content = `

    .listview-container {
      display: flex;
      flex-direction: column;
      border: 1px solid var(--gray100);
      height: var(--presslist-content-height);
    }
    `;

  style.textContent = content;
  return style;
}
