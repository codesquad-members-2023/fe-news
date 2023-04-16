import Observer from './observer.js';

export default class NSSectionHeaderModel extends Observer {
  constructor() {
    super();
    this._state = 'notReady';
  }

  getReady() {
    this._state = 'ready';
    this.notify();
  }
}
