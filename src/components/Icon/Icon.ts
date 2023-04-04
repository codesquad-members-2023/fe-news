import dom from '@utils/dom';
import { icons } from '@assets/icons/index';
import style from './IconStyle';

interface setSvgProps {
  name: string;
}

class Icon extends HTMLElement {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.attachShadow({ mode: 'open' });
    const name = dom.get({ target: this, name: 'name' });
    if (name) this.setSvg({ name });
  }

  async setSvg({ name }: setSvgProps) {
    let svgString: string = icons[name];
    if (!svgString) return;
    svgString = this.replaceSvgStringAttributes(svgString);
    if (this.shadowRoot)
      dom.add({
        target: this.shadowRoot as unknown as HTMLElement,
        template: svgString,
      });
    dom.addStyle({ target: this, style });
  }

  replaceSvgStringAttributes(svgString: string) {
    const defaultSize = 24;
    const size = dom.get({ target: this, name: 'size' });
    const width = dom.get({ target: this, name: 'width' });
    const height = dom.get({ target: this, name: 'height' });
    const fill = dom.get({ target: this, name: 'fill' });

    let result = svgString
      .replace(/width=".*?"/g, `width="${width ?? size ?? defaultSize}"`)
      .replace(/height=".*?"/g, `height="${height ?? size ?? defaultSize}"`);

    const hasFill = this.hasAttribute('fill');
    if (hasFill) result = result.replace(/fill=".*?"/g, `fill="${fill}"`);

    return result;
  }
}

export default Icon;
