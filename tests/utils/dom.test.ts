import { $, $$ } from '@utils/dom.js';
import { JSDOM } from 'jsdom';

describe('Select DOM node', () => {
  const mockDom = new JSDOM();
  global.document = mockDom.window.document;
  global.document.body.innerHTML = `
     <div id="first" class="mock-element"></div>
     <div id="second" class="mock-element"></div>
  `;

  it('Select One - querySelector', () => {
    expect(
      ($('#first', global.document.body) as HTMLElement).outerHTML,
    ).toEqual(`<div id="first" class="mock-element"></div>`);
  });

  it('Select All - querySelectorAll', () => {
    let mockHtml = ``;
    ($$('.mock-element', global.document.body) as NodeList).forEach((node) => {
      mockHtml += (node as HTMLElement).outerHTML;
    });
    expect(mockHtml).toEqual(
      `<div id="first" class="mock-element"></div><div id="second" class="mock-element"></div>`,
    );
  });
});
