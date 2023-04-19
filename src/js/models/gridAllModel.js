import { API_PATH } from '../constant/api.js';
import { NS_SECTION_INFO, VIEW_STATE } from '../constant/dom.js';
import { isEquivalent } from '../utils/objectUtils.js';
import Observer from './observer.js';

export default class GridAllModel extends Observer {
  constructor(NSSectionCurState, dataFetcher) {
    super();
    this._model = NSSectionCurState;
    this._model.subscribe(this.changeView.bind(this));
    this._state = {
      gridOrList: VIEW_STATE.GRID,
      allOrSub: VIEW_STATE.ALL,
      index: 1,
    };
    this._data = [];
    this._dataFetcher = dataFetcher;
  }

  async getData() {
    if (this._data.length === 0) {
      await this._dataFetcher(API_PATH.NS_SECTION, this.generateRandomList.bind(this));
    }
    const start = (this._state.index - 1) * NS_SECTION_INFO.GRID_ALL.PAGE_SIZE;
    const end = start + NS_SECTION_INFO.GRID_ALL.PAGE_SIZE;

    return [...this._data.slice(start, end)];
  }

  generateRandomList(data) {
    const randomNumber = new Set();

    while (randomNumber.size < NS_SECTION_INFO.GRID_ALL.ALL_SIZE) {
      randomNumber.add(Math.floor(Math.random() * data.length));
    }

    randomNumber.forEach((number) => {
      this._data.push(data[number]);
    });
  }

  getFilterData(pressName) {
    let result;
    this._data.some((data) => {
      if (data.pressName === pressName) {
        result = data;
        return true;
      }
    });
    return result;
  }

  changeView(selectedState) {
    if (!isEquivalent(this._state, selectedState)) return;
    this._state.index = 1;
    this.notify();
  }

  increaseIndex(changedIndex) {
    this._state.index = changedIndex;
    this.notify();
  }

  decreaseIndex(changedIndex) {
    this._state.index = changedIndex;
    this.notify();
  }
}
