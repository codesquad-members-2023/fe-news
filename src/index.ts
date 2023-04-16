import { $ } from '@utils/dom.js';
import { App } from '@components/app.js';

const rootElement = $('#root') as HTMLElement;
new App(rootElement);
