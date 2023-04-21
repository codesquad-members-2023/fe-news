export class JournalDetailStore {
  constructor(renderJournalDetail) {
    this.detailListAll = [];
    this.currentType = "종합/경제";
    this.renderJournalDetail = renderJournalDetail;
  }

  setDetailListAll(journalItems) {
    this.detailListAll = journalItems;
  }

  getDetailListAll() {
    return this.detailListAll;
  }

  setCurrentType(selectedType) {
    this.currentType = selectedType;
    this.renderJournalDetail();
  }

  getCurrentType() {
    return this.currentType;
  }
}
