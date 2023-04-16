import Observer from './observer.js';

export default class NSSectionButtonModel extends Observer {
  constructor() {
    super();
    this._state = {
      render: 'notReady',
      view: {
        index: 1,
        gridOrList: 'grid',
      },
    };
  }

  getReady() {
    this._state.render = 'ready';
    this.notify();
  }
  setGridOrList() {}
  changeIndex() {}
}
