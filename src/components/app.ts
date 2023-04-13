import { HeaderComponent } from '@components/header/HeaderComponent.js';
import { MainComponent } from '@components/main/MainComponent.js';
import { FooterComponent } from '@components/footer/FooterComponent.js';

export class App {
  constructor(appRoot: HTMLElement) {
    const header = new HeaderComponent();
    const main = new MainComponent();
    const footer = new FooterComponent();

    appRoot.appendChild(header.element);
    appRoot.appendChild(main.element);
    appRoot.appendChild(footer.element);
  }
}
