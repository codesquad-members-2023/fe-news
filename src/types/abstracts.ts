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
  protected _wrapperElement: HTMLDivElement;
  protected _element: HTMLElement;
  protected constructor() {
    this._wrapperElement = document.createElement('div');
    this._element = this._wrapperElement.firstElementChild as HTMLElement;

    this.setWrapper();
    this.setElement();
  }

  template(state: State) {
    return '';
  }

  protected setWrapper() {
    this._wrapperElement.innerHTML = this.template({});
  }

  protected setElement() {
    this._element = this._wrapperElement.firstElementChild as HTMLElement;
  }

  render(state: State) {
    this.addEvents();
  }

  get element() {
    return this._element;
  }

  addEvents() {
    return;
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
