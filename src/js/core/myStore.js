export default class MyStore {
  #state;

  #listeners;

  constructor(initState, reducer) {
    this.#state = initState;
    this.#listeners = new Map();
    this.reducer = reducer;
  }

  getState() {
    return this.#state;
  }

  register({ listenerType = 'default', listenerCallBack }) {
    if (!this.#listeners.has(listenerType)) this.#listeners.set(listenerType, new Set());
    if (this.#listeners.get(listenerType).has(listenerCallBack)) return;
    this.#listeners.get(listenerType).add(listenerCallBack);
  }

  deregister({ listenerType = 'default', listenerCallBack }) {
    if (!this.#listeners.has(listenerType)) throw new Error('ListenerType entered not found');
    if (!this.#listeners.get(listenerType).has(listenerCallBack))
      throw new Error('ListenerCallBack entered not found');

    this.#listeners.get(listenerType).delete(listenerCallBack);
  }

  publish(listenerType = 'default') {
    if (!this.#listeners.has(listenerType)) throw new Error('ListenerType does not exist');

    if (listenerType !== 'default') this.#listeners.get(listenerType).forEach((listener) => listener());
    this.#listeners.get('default').forEach((listener) => listener());
  }

  dispatch({ listenerType = 'default', action }) {
    this.#state = this.reducer(this.#state, action);
    this.publish(listenerType);
  }
}
