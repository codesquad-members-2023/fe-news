export default class Store {
  #state;

  #listeners;

  constructor(initState, reducer) {
    this.#state = initState;
    this.#listeners = new Set();
    this.reducer = reducer;
  }

  getState() {
    return this.#state;
  }

  register(listener) {
    this.#listeners.add(listener);
  }

  deregister(listener) {
    this.#listeners.delete(listener);
  }

  publish() {
    this.#listeners.forEach((listener) => listener());
  }

  dispatch(action) {
    this.#state = this.reducer(this.#state, action);
    this.publish();
  }
}
