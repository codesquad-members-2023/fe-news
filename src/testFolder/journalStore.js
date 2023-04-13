// 언론사의 상태 저장소
// 언론사 dispatcher에서 전달된 Action을 통해서만 상태 변경
// 상태가 변경되면 View에게 통지

class JournalStore {
  constructor(journalList) {
    this.journalList = journalList;
    this.subscribeList = [];
    this.unSubscribeList = [];
  }
}

export default JournalStore;
