import { validatorUtils } from '../utils/index.js';

const { hasKey, hasValue } = validatorUtils;

export default class MyStore {
  #state;

  #listeners;

  constructor(initState, reducer) {
    this.#state = initState;
    this.#listeners = new Map();
    this.reducer = reducer;

    this.initListeners();
  }

  initListeners() {
    this.#listeners.set('default', new Set());
  }

  getState() {
    return this.#state;
  }

  register({ listenerType = 'default', listenerCallBack }) {
    if (!hasKey(listenerType)) this.#listeners.set(listenerType, new Set());

    const typeListeners = this.#listeners.get(listenerType);
    if (hasValue(typeListeners, listenerCallBack)) return;

    typeListeners.add(listenerCallBack);
  }

  deregister({ listenerType = 'default', listenerCallBack }) {
    if (!hasKey(listenerType)) throw new Error('ListenerType not found');

    const typeListeners = this.#listeners.get(listenerType);
    if (hasValue(typeListeners, listenerCallBack)) throw new Error('ListenerCallBack entered not found');

    typeListeners.delete(listenerCallBack);
  }

  publish(listenerType = 'default') {
    if (!hasKey(this.#listeners, listenerType)) throw new Error('ListenerType does not exist');

    if (listenerType !== 'default') this.#listeners.get(listenerType).forEach((listener) => listener());
    this.#listeners.get('default').forEach((listener) => listener());
  }

  dispatch({ listenerType = 'default', action }) {
    this.#state = this.reducer(this.#state, action);
    this.publish(listenerType);
  }
}
