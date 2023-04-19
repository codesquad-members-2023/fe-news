export default function style() {
  const style = document.createElement('style');

  const content = `
    button {
      border: 0;
    }

    .press-container {

      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(2, 96px);
    
      background-color: var(--white);
      height: var(--presslist-content-height);
      display: none;
    }

    .press-container.show {
      display: grid;
    }

    .press-container.no-press {
      display: block;
    }

    .empty {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      background-color: var(--white);
      justify-content: center;
      align-items: center;
    }

    .empty h3 {
      color: var(--black);
    }

    .empty p {
      color: var(--gray500);
    }
    `;

  style.textContent = content;
  return style;
}
