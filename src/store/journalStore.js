// 언론사의 상태 저장소
// 언론사 dispatcher에서 전달된 Action을 통해서만 상태 변경
// 상태가 변경되면 View에게 통지

const JournalStore = {
  state: {
    journalList: [],
  },

  getState() {
    return this.state;
  },

  dispatch(action) {
    switch (action.type) {
      case "SET_JOURNAL_LIST":
        this.state.journalList = action.journalList;
        break;
      default:
        break;
    }
  },
};

export default JournalStore;

// 상태를 저장하고 변경하는 역할을 한다.
// 현재 상태를 반환하는 getState() 메서드
// Action을 처리하는 dispatch() 메서드
