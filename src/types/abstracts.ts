import { ObserverSubscriber, State } from '@custom-types/types';
import { Model, ObservableModel, View } from '@custom-types/interfaces';
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

export abstract class AbstractObservableModel implements ObservableModel {
  _subscribers: Set<ObserverSubscriber>;
  private _state: State;

  protected constructor() {
    this._state = {};
    this._subscribers = new Set();
  }

  setState(newState: State) {
    this._state = { ...this._state, ...newState };
    this.notify(this._state);
  }

  get state() {
    return this._state;
  }

  addSubscriber(subscriber: ObserverSubscriber) {
    this._subscribers.add(subscriber);
  }

  deleteSubscriber(subscriber: ObserverSubscriber) {
    this._subscribers.delete(subscriber);
  }

  notify(state: State) {
    this._subscribers.forEach((subscriber) => subscriber(state));
  }
}
