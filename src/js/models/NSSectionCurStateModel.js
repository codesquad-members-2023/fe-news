import { NS_SECTION_INFO, VIEW_STATE, RENDER_STATE } from '../constant/dom.js';
import { API_PATH } from '../constant/api.js';
import { isEquivalent } from '../utils/objectUtils.js';
import Observer from './observer.js';

export default class NSSectionCurViewStateModel extends Observer {
  constructor(dataFetcher) {
    super();
    this._curViewState = {
      render: RENDER_STATE.NOT_READY,
      gridOrList: VIEW_STATE.GRID,
      allOrSub: VIEW_STATE.ALL,
      index: 1, // 전체 갯수
      // grid index , list index
    };
    this._dataFetcher = dataFetcher;
    this._allPressData = [];
    this._gridPressData = [];
    this._subPressData = [];
  }

  changeRenderState() {
    this._state_render = RENDER_STATE.READY;
    this.notify(this._curViewState);
  }

  getCurViewState() {
    return this._curViewState;
  }

  containsSubData(pressName) {
    return this._subPressData.some((data) => {
      return data.pressName === pressName;
    });
  }

  setSubData(data) {
    this._subPressData.push(data);
  }

  async setAllPressData(data) {
    this._allPressData = await data;
  }

  setGirdPressData(allData) {
    const randomNumber = new Set();

    while (randomNumber.size < NS_SECTION_INFO.GRID_ALL.ALL_SIZE) {
      randomNumber.add(Math.floor(Math.random() * allData.length));
    }

    randomNumber.forEach((number) => {
      this._gridPressData.push(allData[number]);
    });
  }

  getGridSubData() {
    const start = (this._curViewState.index - 1) * NS_SECTION_INFO.GRID_ALL.PAGE_SIZE;
    const end = start + NS_SECTION_INFO.GRID_ALL.PAGE_SIZE;

    return [...this._subPressData.slice(start, end)];
  }

  getAllPressData() {
    return this._allPressData;
  }

  async getGridAllPressData() {
    const start = (this._curViewState.index - 1) * NS_SECTION_INFO.GRID_ALL.PAGE_SIZE;
    const end = start + NS_SECTION_INFO.GRID_ALL.PAGE_SIZE;

    if (this._gridPressData.length === 0) {
      await this._dataFetcher(API_PATH.NS_SECTION, this.setAllPressData.bind(this));
    }
    this.setGirdPressData(this._allPressData);
    return [...this._gridPressData.slice(start, end)];
  }

  getArticleByPublish(pressName) {
    let article;
    this._allPressData.some((data) => {
      if (data.pressName === pressName) {
        article = data;
        return true;
      }
    });
    return article;
  }

  deleteSubData(data) {
    this._subPressData = this._subPressData.filter((subData) => subData.pressName !== data);
    this.notify(this._curViewState);
  }

  changeCurViewState(selectedState) {
    if (isEquivalent(this._curViewState, selectedState)) return;
    for (const prop in this._curViewState) {
      this._curViewState[prop] = selectedState[prop];
    }
    this._curViewState.index = 1;
    this.notify(this._curViewState);
  }

  increaseIndex() {
    this._curViewState.index += 1;
    this.notify(this._curViewState);
  }

  decreaseIndex() {
    this._curViewState.index -= 1;
    this.notify(this._curViewState);
  }
}
