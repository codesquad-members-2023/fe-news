export default function style() {
  const style = document.createElement('style');

  const content = `
    @import 'src/styles/index.css';

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
    }

    .tab button.is-active {
      color: var(--black);
    }
    `;

  style.textContent = content;
  return style;
}
