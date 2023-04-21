import { createStore, ReducerType, ActionType } from '@utils/redux';
import { SectionInfoType } from './sectionType';

const initialState: SectionInfoType = {
  categoryCounts: {},
  section: {
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
  },
  totalNumber: 0,
  currentCategoryIndex: 0,
};

interface props {
  state: SectionInfoType;
}

interface chnageSectionProps extends props {
  payload: SectionInfoType;
}

const setSection = ({ state, payload }: chnageSectionProps) => {
  return {
    ...payload,
  };
};

const reducer: ReducerType<SectionInfoType> = (
  state = initialState,
  action: ActionType
): SectionInfoType => {
  switch (action.type) {
    case 'SET_SECTION':
      return setSection({ state, payload: action.payload });
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);
export default store;
