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

      index: 1,
      curListCategory: null,
    };
    this._dataFetcher = dataFetcher;
    this._allPressData = {};
    this._gridPressData = [];
    this._subPressData = [];
    this._allCategory = [];
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

  async getAllData(data) {
    const allData = await data;
    return allData;
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

  setAllPressData(allData) {
    allData.forEach((data) => {
      !this._allPressData.hasOwnProperty(data.category)
        ? ((this._allPressData[data.category] = [data]), this._allCategory.push(data.category))
        : this._allPressData[data.category].push(data);
    });
    this._curViewState.curListCategory = this._allCategory[0];
  }

  isNextSubPage() {
    const start = this._curViewState.index * NS_SECTION_INFO.GRID_ALL.PAGE_SIZE;
    const end = start + NS_SECTION_INFO.GRID_ALL.PAGE_SIZE;

    return [...this._subPressData.slice(start, end)].length !== 0;
  }

  getGridSubData() {
    const start = (this._curViewState.index - 1) * NS_SECTION_INFO.GRID_ALL.PAGE_SIZE;
    const end = start + NS_SECTION_INFO.GRID_ALL.PAGE_SIZE;

    return [...this._subPressData.slice(start, end)];
  }

  getAllCategory() {
    return this._allCategory;
  }

  getPressData() {
    const { index, curListCategory } = this._curViewState;
    const pressData = this._allPressData[curListCategory][index - 1];
    return pressData;
  }

  getCurIndexAndCategory() {
    const { index, curListCategory } = this._curViewState;
    return [index, this._curViewState.curListCategory, this._allPressData[curListCategory].length];
  }

  async getGridAllPressData() {
    const start = (this._curViewState.index - 1) * NS_SECTION_INFO.GRID_ALL.PAGE_SIZE;
    const end = start + NS_SECTION_INFO.GRID_ALL.PAGE_SIZE;

    if (this._gridPressData.length === 0) {
      const allData = await this._dataFetcher(API_PATH.NS_SECTION, this.getAllData.bind(this));
      this.setAllPressData(allData);
      this.setGirdPressData(allData);
    }
    return [...this._gridPressData.slice(start, end)];
  }

  getArticleByPublish(pressName) {
    let article;
    for (const [category, data] of Object.entries(this._allPressData)) {
      if (
        data.some((data) => {
          if (data.pressName === pressName) {
            article = data;
            return true;
          }
        })
      ) {
        break;
      }
    }
    return article;
  }

  deleteSubDataOnAllView(data) {
    this._subPressData = this._subPressData.filter((subData) => subData.pressName !== data);
  }

  deleteSubData(data) {
    this._subPressData = this._subPressData.filter((subData) => subData.pressName !== data);
    const { gridOrList, allOrSub } = this._curViewState;
    if (
      this.getGridSubData().length === 0 &&
      gridOrList === VIEW_STATE.GRID &&
      allOrSub === VIEW_STATE.SUB
    ) {
      this._curViewState.index -= 1;
    }
    this.notify(this._curViewState);
  }

  changeCurViewState(selectedState) {
    if (isEquivalent(this._curViewState, selectedState)) return;

    const selectedKeys = Object.keys(selectedState);
    for (const prop in this._curViewState) {
      if (selectedKeys.includes(prop)) {
        this._curViewState[prop] = selectedState[prop];
      }
    }
    this._curViewState.curListCategory = this._allCategory[0];
    this._curViewState.index = 1;
    this.notify(this._curViewState);
  }

  changeListCategory(selectedCategory) {
    if (this._curViewState.curListCategory === selectedCategory) return;

    this._curViewState.curListCategory = selectedCategory;
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
