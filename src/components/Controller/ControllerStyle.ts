export default function style() {
  const style = document.createElement('style');

  const content = `
    @import 'src/styles/index.css';

    .controller {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: calc(100% + 72px + 72px);
      height: var(--presslist-content-height);
    }
    `;

  style.textContent = content;
  return style;
}
