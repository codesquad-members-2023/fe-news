import { HeaderComponent } from '@components/header/HeaderComponent.js';
import { MainComponent } from '@components/main/MainComponent.js';
import { FooterComponent } from '@components/footer/FooterComponent.js';

export class App {
  constructor(appRoot: HTMLElement) {
    appRoot.innerHTML = `
      <div id="header-wrapper" class="h-1/6"></div>
      <div id="main-wrapper"></div>
      <div id="footer-wrapper"></div>
    `;
    new HeaderComponent(
      appRoot.querySelector('#header-wrapper') as HTMLElement,
    );
    const main = new MainComponent();
    const footer = new FooterComponent();
    // header.attachTo();
    appRoot.appendChild(main.element);
    appRoot.appendChild(footer.element);
  }
}
