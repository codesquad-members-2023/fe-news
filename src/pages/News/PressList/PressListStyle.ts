export default function style() {
  const style = document.createElement('style');

  const content = `
    @import 'src/styles/index.css';

    :host {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    `;

  style.textContent = content;
  return style;
}
