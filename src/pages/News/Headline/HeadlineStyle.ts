export default function style() {
  const style = document.createElement('style');

  const content = `
   @import 'src/styles/index.css';

    :host {
      display: flex;
      gap: 8px;
    }
    `;

  style.textContent = content;
  return style;
}
