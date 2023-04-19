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
    this._data = [];
  }

  containsData(pressName) {
    return this._data.some((data) => {
      return data.pressName === pressName;
    });
  }

  setSubData(data) {
    this._data.push(data);
  }

  deleteSubData(data) {
    this._data = this._data.filter((el) => el !== data);
    this.notify();
  }

  getData() {
    const start = (this._state.index - 1) * NS_SECTION_INFO.GRID_ALL.PAGE_SIZE;
    const end = start + NS_SECTION_INFO.GRID_ALL.PAGE_SIZE;

    return [...this._data.slice(start, end)];
  }

  changeView(selectedState) {
    if (!isEquivalent(this._state, selectedState)) return;

    this._state.index = 1;
    this.notify();
  }
}
