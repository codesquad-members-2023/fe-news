export default function style() {
  const style = document.createElement('style');

  const content = `
     @import 'src/styles/index.css';

    .press-container {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 1px;
      background-color: var(--gray100);
      
      height: var(--presslist-conent-height);
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
