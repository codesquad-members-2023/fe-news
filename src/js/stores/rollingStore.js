import Store from '../core/Store.js';

const initialState = {
  leftTitle: [],
  rightTitle: [],
}

const autoRollingReducer = (state, actionKey, { data }) => {
  switch(actionKey) {
    case 'START_ROLLINGBAR':
      return { ...data };
    default:
      return { ...state };
  }
}

export const RollingStore = new Store(initialState, autoRollingReducer);