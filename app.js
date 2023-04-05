import { HeaderComponent } from './src/components/header/HeaderComponent.js';
class App {
    constructor(appRoot) {
        const header = new HeaderComponent();
        appRoot.appendChild(header.element);
    }
}
const app = new App(document.querySelector('#app'));
