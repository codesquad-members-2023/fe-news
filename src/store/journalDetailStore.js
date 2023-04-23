export class JournalDetailStore {
  constructor(loadJournalDetail, renderJournalDetail) {
    // journalType에 따라 리스트가 바뀌게 한다.
    this.detailListAll = [];
    this.currentJournalType = "종합/경제";
    this.loadJournalDetail = loadJournalDetail;
    this.renderJournalDetail = renderJournalDetail;
  }

  setDetailListAll(journalItems) {
    this.detailListAll = journalItems;
    this.renderJournalDetail("STATE_ALL");
  }

  getDetailListAll() {
    return this.detailListAll;
  }

  setCurrentJournalType(journalType) {
    this.currentJournalType = journalType;
    this.loadJournalDetail();
  }

  getCurrentJournalType() {
    return this.currentJournalType;
  }
}
