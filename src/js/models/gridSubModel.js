import { NS_SECTION_INFO, VIEW_STATE } from '../constant/dom.js';
import Observer from './observer.js';
import { isEquivalent } from '../utils/objectUtils.js';

export default class GridSubModel extends Observer {
  constructor(NSSectionCurState) {
    super();
    this._model = NSSectionCurState;
    this._model.subscribe(this.changeView.bind(this));
    this._state = {
      gridOrList: VIEW_STATE.GRID,
      allOrSub: VIEW_STATE.SUB,
      index: 1,
    };
    this._data = {
      page1: [],
      page2: [],
      page3: [],
      page4: [],
    };
  }

  getData() {
    return this._data.page1;
  }

  changeView(selectedState) {
    if (!isEquivalent(this._state, selectedState)) return;

    this._state.index = 1;
    this.notify();
  }
}
