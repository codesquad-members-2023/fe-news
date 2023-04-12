export default function style() {
  const style = document.createElement('style');

  const content = `
   @import 'src/styles/index.css';

    .listview-container {
      display: flex;
      flex-direction: column;
      border: 1px solid var(--gray100);
      height: var(--presslist-conent-height);
    }
    `;

  style.textContent = content;
  return style;
}
