import { VIEW_STATE } from '../constant/dom.js';
import { isEquivalent } from '../utils/objectUtils.js';
import Observer from './observer.js';

export default class NSSectionCurStateModel extends Observer {
  constructor() {
    super();
    this._state = {
      gridOrList: VIEW_STATE.GRID,
      allOrSub: VIEW_STATE.ALL,
    };
  }

  getCurViewState() {
    return this._state;
  }

  changeState(selectedState) {
    if (isEquivalent(this._state, selectedState)) return;
    for (const prop in this._state) {
      this._state[prop] = selectedState[prop];
    }

    this.notify(this._state);
  }
}
