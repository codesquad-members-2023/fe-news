export default function style() {
  const style = document.createElement('style');

  const content = `


    :host {
      display: flex;
      gap: 8px;
    }
    `;

  style.textContent = content;
  return style;
}
