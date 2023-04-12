class Store {
  #state;
  #listeners = [];
  #reducer;

  constructor(state, reducer) {
    this.#state = state;
    this.#reducer = reducer;
  }

  getState() {
    return this.#state;
  }

  subscribe(fn) {
    this.#listeners.push(fn);
  }

  publish() {
    this.#listeners.forEach((fn) => {
      fn();
    });
  }

  async dispatch(actionKey, { ...payload } = {}) {
    this.#state = await this.#reducer(this.#state, actionKey, { ...payload });
    this.publish();
  }
}

export default Store;
