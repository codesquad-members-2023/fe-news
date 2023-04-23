export class JournalDetailStore {
  constructor() {
    // journalType에 따라 리스트가 바뀌게 한다.
    this.detailListAll = [];
    this.currentJournalType = "종합/경제";
  }

  setDetailListAll(journalItems) {
    this.detailListAll = journalItems;
  }

  getDetailListAll() {
    return this.detailListAll;
  }

  setCurrentJournalType(journalType) {
    this.currentJournalType = journalType;
  }

  getCurrentJournalType() {
    return this.currentJournalType;
  }
}
