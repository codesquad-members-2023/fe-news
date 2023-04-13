import { State } from '@src/types/types';
import { Component, Model, View } from '@src/types/interfaces';
import { $ } from '@utils/dom.js';

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

  setEvent(
    selector: string,
    eventName: keyof WindowEventMap,
    handler: EventListener,
  ) {
    $(selector, this.element)!.addEventListener(eventName, handler);
  }
}
