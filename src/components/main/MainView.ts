import { State } from '@utils/types';
import { View } from '@utils/interfaces';

export class MainView implements View {
  private _template: string;
  private _templateElement: HTMLTemplateElement;
  private _element: HTMLElement;
  constructor() {
    this._template = `<div></div>`;
    this._templateElement = document.createElement('template');
    this._element = this._templateElement.content
      .firstElementChild as HTMLElement;
  }

  private setTemplate(state: State) {
    this._template = `<main class="h-4/6 bg-green-100 border border-green-500 flex flex-row justify-end"></main>`;
  }

  render(state: State) {
    this.setTemplate(state);
    this._templateElement.innerHTML = this._template;
  }

  get element() {
    return this._templateElement.content.firstElementChild as HTMLElement;
  }
}
