export default function style() {
  const style = document.createElement('style');

  const content = `
    .wrap {
      border: 1px solid var(--gray100); 
      border-bottom-width: 0;
      border-right-width: 0;
    }
    `;

  style.textContent = content;
  return style;
}
