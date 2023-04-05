export class HeaderModel {
    constructor() {
        this._state = {};
    }
    setState(newState) {
        this._state = Object.assign(Object.assign({}, this._state), newState);
    }
    get state() {
        return this._state;
    }
}
