import Store from '../core/Store.js';

const initialState = {
  rollingData: {
    leftTitle: [],
    rightTitle: [],
  },
  mediaData: {
    media: [],
  },
  subscribeData: {
    subscribedList: [],
  }
}

const dataReducer = (state, actionKey, { responseData }) => {
  switch(actionKey) {
    case 'DELIVER_DATA':
      return {
        rollingData: {
          leftTitle: [...responseData[0].titleLeft],
          rightTitle: [...responseData[0].titleRight],
        },
        mediaData: {
          media: responseData[1].media,
        },
        subscribeData: {
          subscribedList: [],
        }
      }
    default:
      return { ...state };
  }
}

export const DataStore = new Store(initialState, dataReducer);