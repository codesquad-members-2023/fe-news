export default function style() {
  const style = document.createElement('style');

  const content = `
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    button {
      border: 0
    }

    a,
    a:hover {
      text-decoration: none;
      color: inherit;
    }

    p {
      margin: 0;
    }
    
    :host {
      padding: 24px;
    }

    .header {
      display: flex;
      align-items: center;
      gap: 16px;
      color: var(--gray400);
    }

    .contents {
      margin-top: 16px;
      display: grid;
      grid-template-columns: 320px 1fr;
      gap: 32px;
    }

    .headliner > .image {
      width: 320px;
      height: 200px;
      display: inline-block;
      background-size: cover;
      border: 1px solid var(--gray100);
    }

    .headliner > .title {
      margin-top: 16px;
      color: var(--black);
      font-weight: var(--typo-body-md-fontweight);
      font-size: var(--typo-body-md-fontsize);
      line-height: var(--typo-body-md-lineheight);
    }

    li {
      color: var(--gray500);
      margin-bottom: 16px;
      font-weight: var(--typo-body-md-fontweight);
      font-size: var(--typo-body-md-fontsize);
      line-height: var(--typo-body-md-lineheight);
    }

    .edit-time {
      font-weight: var(--typo-body-xs-fontweight);
      font-size: var(--typo-body-xs-fontsize);
      line-height: var(--typo-body-xs-lineheight);
    }

    .headliner > .title:hover, li:hover {
      text-decoration-line: underline;
    }

    .articles-container > .caption {
      color: var(--gray200);
      font-weight: var(--typo-body-sm-fontweight);
      font-size: var(--typo-body-sm-fontsize);
      line-height: var(--typo-body-sm-lineheight);
    }
    `;

  style.textContent = content;
  return style;
}
