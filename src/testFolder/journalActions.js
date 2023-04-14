const SUBSCRIBE_JOURNAL = "SUBSCRIBE_JOURNAL";
const UNSUBSCRIBE_JOURNAL = "UNSUBSCRIBE_JOURNAL";

export const subscribeJournal = (journal) => {
  return {
    type: SUBSCRIBE_JOURNAL,
    journal,
  };
};

export const unsubscribeJournal = (journal) => {
  return {
    type: UNSUBSCRIBE_JOURNAL,
    journal,
  };
};

// setJournalList : JournalStore의 state를 변경하는 Action.
// dispatch를 통해 Store에 전달한다.
