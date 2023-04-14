export default function style() {
  const style = document.createElement('style');

  const content = `

    :host {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    `;

  style.textContent = content;
  return style;
}
