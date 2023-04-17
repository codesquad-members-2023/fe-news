export default function style() {
  const style = document.createElement('style');

  const content = `

    button {
      background: transparent;
      border: none;
      padding: 0;
    }

    button:hover {
      cursor: pointer;
    }

    ul {
      padding: 0;
      margin: 0;
    }

    li {
      list-style-type: none;
    }

    .wrap {
      display: flex;
      justify-content: space-between;
    }

    ul {
      display: flex;
      align-items: center;
    }

    .tab {
      gap: 24px;
    }
    
    .view {
      gap: 8px;

    }

    .tab button {
      color: var(--gray200);

      font-weight: var(--typo-body-md-fontweight);
      font-size: var(--typo-body-md-fontsize);
      line-height: var(--typo-body-md-lineheight);
    }

    .tab button.is-active {
      color: var(--black);

      font-weight: var(--typo-title-md-fontweight);
      font-size: var(--typo-title-md-fontsize);
      line-height: var(--typo-title-md-lineheight);
    }
    `;

  style.textContent = content;
  return style;
}
