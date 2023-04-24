export class JournalDetailStore {
  constructor(loadJournalDetail, renderJournalDetail) {
    // journalType에 따라 리스트가 바뀌게 한다.
    this.detailListAll = [];
    this.currentJournalType = "종합/경제";
    this.loadJournalDetail = loadJournalDetail;
    this.renderJournalDetail = renderJournalDetail;
  }

  setDetailListAll(journalItems) {
    this.detailListAll = journalItems.sort(() => 0.5 - Math.random());
  }

  getDetailListAll() {
    return this.detailListAll;
  }

  async setCurrentJournalType(journalType) {
    this.currentJournalType = journalType;
    await this.loadJournalDetail();
    this.renderJournalDetail("STATE_ALL");
  }

  getCurrentJournalType() {
    return this.currentJournalType;
  }
}
