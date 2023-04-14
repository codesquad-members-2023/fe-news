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
    isSubscribed: false,
  },
};

interface props {
  state: SectionType;
}

interface chnageSectionProps extends props {
  payload: SectionType;
}

const changeSection = ({ state, payload }: chnageSectionProps) => {
  return {
    ...payload,
  };
};

const reducer: ReducerType<SectionType> = (
  state = initialState,
  action: ActionType
): SectionType => {
  switch (action.type) {
    case 'CHANGE_SECTION':
      return changeSection({ state, payload: action.payload });
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);
export default store;
