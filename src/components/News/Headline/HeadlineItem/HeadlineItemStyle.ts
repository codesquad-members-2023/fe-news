export default function style() {
  const style = document.createElement('style');

  const content = `
    a {
      color: inherit;
      text-decoration-line: none;
    }

    a:hover {
      text-decoration-line: underline;
    }

    :host {
      display: flex;
      padding: 0 16px;
      gap: 16px;
      width: 100%;
      height: 49px;
      overflow-y: hidden;
      background: var(--offwhite);
      border: 1px solid var(--gray100);
      align-items: center;
    }

    li {
      list-style-type: none;
      height: 49px;
      display: flex;
      align-items: center;
    }

    ul {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 16px; 
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

    .title a {
      word-wrap: break-word;
      width: 360px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    `;

  style.textContent = content;
  return style;
}
