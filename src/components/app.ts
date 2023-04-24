import { HeaderComponent } from '@components/header/HeaderComponent.js';
import { MainComponent } from '@components/main/MainComponent.js';
import { FooterComponent } from '@components/footer/FooterComponent.js';

export class App {
  constructor(appRoot: HTMLElement) {
    /*
    <app>
      <div id="header-wrapper" class="h-1/6"></div>
      <div id="main-wrapper" class="h-4/6"></div>
      <div id="footer-wrapper" class="h-1/6"></div>
    </app>
    형태라고 생각하면 된다.
    붙이는 자식 노드에 대해서는
     */
    appRoot.innerHTML = `
      <div id="header-wrapper" class="h-1/6"></div>
      <div id="main-wrapper" class="h-4/6"></div>
      <div id="footer-wrapper" class="h-1/6"></div>
    `;
    new HeaderComponent(
      appRoot.querySelector('#header-wrapper') as HTMLElement,
    );
    new MainComponent(appRoot.querySelector('#main-wrapper') as HTMLElement);
    new FooterComponent(
      appRoot.querySelector('#footer-wrapper') as HTMLElement,
    );
  }
}
