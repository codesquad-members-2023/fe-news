import { API_PATH } from '../constant/api.js';
import { NS_SECTION_INFO } from '../constant/dom.js';
import Observer from './observer.js';

export default class GridAllModel extends Observer {
  constructor(dataFetcher) {
    super();
    this._state = {
      index: 1,
      isSelected: true,
    };
    this._data = {
      1: [],
      2: [],
      3: [],
      4: [],
    };
    this._dataFetcher = dataFetcher;
  }

  async getData() {
    if (this._data[this._state.index].length === 0) {
      await this._dataFetcher(API_PATH.NS_SECTION, this.generateRandomList.bind(this));
    }
    return this._data[this._state.index];
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
      this._data[key].push(data[number].logoImgSrc);
      count++;
    });
  }

  increaseIndex() {
    this._state.index += 1;
    this.notify();
  }

  decreaseIndex() {
    this._state.index -= 1;
    this.notify();
  }
}
