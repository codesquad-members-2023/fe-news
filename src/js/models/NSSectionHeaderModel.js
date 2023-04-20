import Observer from './observer.js';
import { RENDER_STATE } from '../constant/dom.js';

export default class NSSectionHeaderModel extends Observer {
  constructor() {
    super();
    this._state = RENDER_STATE.NOT_READY;
  }

  changeReadyState() {
    this._state = RENDER_STATE.READY;
    this.notify();
  }
}
