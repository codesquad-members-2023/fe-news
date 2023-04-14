export default function style() {
  const style = document.createElement('style');

  const content = `

    :host {
      display: flex;
      padding: 0 16px;
      gap: 16px;
      width: 100%;
      min-height: 49px;
      height: auto;
      background: var(--offwhite);
      border: 1px solid var(--gray100);
      align-items: center;
    }

    .press {
      flex-grow: 0;
      color: var(--black);
      white-space: nowrap;

      font-weight: var(--typo-title-sm-fontweight);
      font-size: var(--typo-title-sm-fontsize);
      line-height: var(--typo-title-sm-lineheight);
    }
    
    .title {
      flex-grow: 1;
      color: var(--gray500);
      
      font-weight: var(--typo-body-sm-fontweight);
      font-size: var(--typo-body-sm-fontsize);
      line-height: var(--typo-body-sm-lineheight);
    }
    `;

  style.textContent = content;
  return style;
}
