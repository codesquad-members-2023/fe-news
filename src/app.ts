import { HeaderComponent } from '@components/header/HeaderComponent.js';
import { MainComponent } from '@components/main/MainComponent.js';
import { FooterComponent } from '@components/footer/FooterComponent.js';

class App {
  constructor(appRoot: HTMLElement) {
    const header = new HeaderComponent();
    appRoot.appendChild(header.element);
    const main = new MainComponent();
    appRoot.appendChild(main.element);
    const footer = new FooterComponent();
    appRoot.appendChild(footer.element);
  }
}

const app = new App(document.querySelector('#app') as HTMLElement);
