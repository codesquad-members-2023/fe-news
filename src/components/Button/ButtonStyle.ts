import Style from '@components/Style/Style';

export class ButtonStyle extends Style {
  constructor() {
    const content = `
    @import 'src/styles/index.css';

    :host {
      display: inline-block;
    }

    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      padding: 0px 10px 0px 8px;
      gap: 2px;
      height: 24px;

      background: var(--white);
      border: 1px solid var(--gray100);
    
      border-radius: 999px;
      color: var(--gray200);
    }

    button:hover {
      cursor: pointer;
      background: var(--offwhite);
    }
    `;

    super({ content });
  }
}

export default ButtonStyle;
