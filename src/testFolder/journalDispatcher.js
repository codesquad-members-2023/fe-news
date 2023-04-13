import JournalStore from "./journalStore.js";
import { subscribeJournal, unsubscribeJournal } from "./journalActions.js";

const journalDispatch = () => {
  const reducer = (state = { subscribed: [], unsubscribed: [] }, action) => {
    switch (action.type) {
      case "SUBSCRIBE_JOURNAL":
        return {
          subscribed: [...state.subscribed, action.journal],
          unsubscribed: state.unsubscribed.filter(
            (journal) => journal !== action.journal
          ),
        };
      case "UNSUBSCRIBE_JOURNAL":
        return {
          subscribed: state.subscribed.filter(
            (journal) => journal !== action.journal
          ),
          unsubscribed: [...state.unsubscribed, action.journal],
        };
      default:
        return state;
    }
  };

  const store = JournalStore(reducer);

  const subscribeButtonHandler = (journal) => {
    store.dispatch(subscribeJournal(journal));
  };

  const unsubscribeButtonHandler = (journal) => {
    store.dispatch(unsubscribeJournal(journal));
  };
};

export {
  journalDispatch,
  store,
  subscribeButtonHandler,
  unsubscribeButtonHandler,
};
