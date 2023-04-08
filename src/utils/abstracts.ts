import { State } from '@utils/types';
import { Model, View } from '@utils/interfaces';

export abstract class AbstractModel implements Model {
  protected _state: State;
  protected constructor() {
    this._state = {};
  }

  setState(newState: State) {
    this._state = { ...this._state, ...newState };
  }

  get state() {
    return this._state;
  }
}
export abstract class AbstractView implements View {
  protected _templateElement: HTMLTemplateElement;
  protected _element: HTMLElement;
  protected constructor() {
    this._templateElement = document.createElement('template');
    this._element = this._templateElement.content
      .firstElementChild as HTMLElement;

    this.setTemplate();
    this.setElement();
  }

  protected setTemplate() {
    this._templateElement.innerHTML = ``;
  }

  protected setElement() {
    this._element = this._templateElement.content
      .firstElementChild as HTMLElement;
  }

  render(state: State) {
    this.element.innerHTML = ``;
  }

  get element() {
    return this._element;
  }
}
