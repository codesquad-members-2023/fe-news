import { HeaderComponent } from './components/header/HeaderComponent.js';

class App {
  constructor(appRoot: HTMLElement) {
    const header = new HeaderComponent();
    appRoot.appendChild(header.element);
  }
}

const app = new App(document.querySelector('#app') as HTMLElement);
