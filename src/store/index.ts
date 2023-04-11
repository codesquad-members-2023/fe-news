class Observable {
  _observers: Set<(data: any) => void>;

  constructor() {
    this._observers = new Set();
  }
  subscribe(observer: (data: any) => void) {
    this._observers.add(observer);
  }
  unsubscribe(observer: (data: any) => void) {
    this._observers.delete(observer);
  }
  notify(data: any) {
    this._observers.forEach((observer) => observer(data));
  }
}
