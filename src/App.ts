import { add, addStyle, addShadow, getProperty } from '@utils/dom';

class News extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    const template = `
    <news-element></news-element>                                                                       
    
    `;

    addShadow({ target: this });
    add({
      target: this.shadowRoot,
      template,
    });
  }
}

export default News;
