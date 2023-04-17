export class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers = [...this.observers, observer];
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((existObserver) => existObserver !== observer);
  }

  notify() {
    this.observers.forEach((observer) => observer.render());
  }
}
