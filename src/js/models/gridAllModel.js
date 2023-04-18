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
    this._data = {
      page1: [],
      page2: [],
      page3: [],
      page4: [],
    };
    this._dataFetcher = dataFetcher;
  }

  async getData() {
    if (this._data[`page${this._state.index}`].length === 0) {
      await this._dataFetcher(API_PATH.NS_SECTION, this.generateRandomList.bind(this));
    }
    return this._data[`page${this._state.index}`];
  }

  generateRandomList(data) {
    const randomNumber = new Set();

    const randomNumberArray = Array.from({ length: data.length }, (_, i) => i);
    while (randomNumber.size < NS_SECTION_INFO.GRID_ALL.ALL_SIZE) {
      randomNumber.add(Math.floor(Math.random() * randomNumberArray.length));
    }

    let count = 0;
    randomNumber.forEach((number) => {
      const key = Math.ceil((count + 1) / NS_SECTION_INFO.GRID_ALL.PAGE_SIZE);
      this._data[`page${key}`].push(data[number]);
      count++;
    });
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
