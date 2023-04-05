import { State, View } from '../../utils/types';

export class HeaderView implements View {
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
    this._template = `<header>${state.title}</header>`;
  }

  render(state: State) {
    this.setTemplate(state);
    this._templateElement.innerHTML = this._template;
  }

  get element() {
    return this._templateElement.content.firstElementChild as HTMLElement;
  }
}
