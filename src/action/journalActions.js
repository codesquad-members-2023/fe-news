import JournalStore from "../store/journalStore.js";

const JournalActions = {
  setJournalList(journalList) {
    JournalStore.dispatch({
      type: "SET_JOURNAL_LIST",
      journalList,
    });
  },
};

export default JournalActions;

// setJournalList : JournalStore의 state를 변경하는 Action.
// dispatch를 통해 Store에 전달한다.
