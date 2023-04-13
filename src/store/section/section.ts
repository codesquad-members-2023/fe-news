import { createStore, ReducerType, ActionType } from '@utils/redux';
import { SectionType } from './sectionType';

const initialState: SectionType = {
  id: '',
  pressId: '',
  lastEdited: new Date(),
  articles: [],
  category: '',
  press: {
    pid: '',
    pname: '',
    newMainLogo: '',
    newMainLightLogo: '',
    newMainDarkLogo: '',
    thumbnailValid: false,
    valid: false,
  },
};

const reducer: ReducerType<SectionType> = (
  state = initialState,
  action: ActionType
): SectionType => {
  switch (action.type) {
    case 'SUBSCRIBE':

    case 'UNSUBSCRIBE':

    default:
      return state;
  }
};

const store = createStore(reducer, initialState);
export default store;
