export default function style() {
  const style = document.createElement('style');

  const content = `
    :host {
      display: flex;
      align-items: center;
      justify-content: space-between;
      
    }

    p {
      margin: 0;
    }

    .title {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--black);

      font-weight: var(--typo-display-fontweight);
      font-size: var(--typo-display-fontsize);
      line-height: var(--typo-display-lineheight);
    }
    
    .date {
      color: var(--gray500);
    }
    
    `;

  style.textContent = content;
  return style;
}
