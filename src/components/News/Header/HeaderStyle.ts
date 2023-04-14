export default function style() {
  const style = document.createElement('style');

  const content = `

    :host {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .title {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--black);
    }
    
    .date {
      color: var(--gray500);
    }
    
    `;

  style.textContent = content;
  return style;
}
