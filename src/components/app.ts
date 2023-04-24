import { HeaderComponent } from '@components/header/HeaderComponent.js';
import { MainComponent } from '@components/main/MainComponent.js';
import { FooterComponent } from '@components/footer/FooterComponent.js';

export class App {
  constructor(appRoot: HTMLElement) {
    appRoot.innerHTML = `
      <div id="header-wrapper" class="h-1/6"></div>
      <div id="main-wrapper" class="h-4/6"></div>
      <div id="footer-wrapper" class="h-1/6"></div>
    `;
    new HeaderComponent(
      appRoot.querySelector('#header-wrapper') as HTMLElement,
    );
    const main = new MainComponent();
    (appRoot.querySelector('#main-wrapper') as HTMLElement).appendChild(
      main.element,
    );
    new FooterComponent(
      appRoot.querySelector('#footer-wrapper') as HTMLElement,
    );
  }
}
