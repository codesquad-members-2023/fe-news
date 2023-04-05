import { State, Model } from '../../utils/types';

export class HeaderModel implements Model {
  private _state: State;
  constructor() {
    this._state = {};
  }

  setState(newState: State) {
    this._state = { ...this._state, ...newState };
  }

  get state() {
    return this._state;
  }
}
