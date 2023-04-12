export default function style() {
  const style = document.createElement('style');

  const content = `
     @import 'src/styles/index.css';

    .press-container {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      border-top: 1px solid var(--gray100);
      border-left: 1px solid var(--gray100);
      height: var(--presslist-conent-height);
    }
    `;

  style.textContent = content;
  return style;
}
