import Style from '@components/Style/Style';
import { get } from '@utils/dom';

interface constructorProp {
  target: HTMLElement;
}

export class ListViewItemStyle extends Style {
  constructor({ target }: constructorProp) {
    const image = get({ target, name: 'image' });
    const content = `
    @import 'src/styles/index.css';

    .header {
      display: flex;
      align-items: center;
      gap: 16px;
      color: var(--gray400);
    }

    .contents {
      margin-top: 16px;
      display: flex;
      gap: 32px;
    }

    .headliner > .image {
      width: 320px;
      height: 200px;
      display: inline-block;
      background: black;
    }

    .headliner > .title {
      margin-top: 16px;
    }

    li {
      color: var(--gray500);
      margin-bottom: 16px;
    }

    li:hover {
      text-decoration-line: underline;
      cursor: pointer;
    }

    .articles-container > .caption {
      color: var(--gray200);
    }



    `;

    super({ content });
  }
}

export default ListViewItemStyle;
