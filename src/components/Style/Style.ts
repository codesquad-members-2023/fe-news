interface constructorProp {
  content: string;
}

interface initProp {
  content: contentType;
}

type contentType = string;

interface Style {
  element: HTMLStyleElement;
}

class Style {
  constructor({ content }: constructorProp) {
    this.element = this.init({ content });
  }

  init({ content }: initProp) {
    const style = document.createElement('style');
    style.textContent = content;
    return style;
  }
}

export default Style;
