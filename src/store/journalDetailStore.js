export class JournalDetailStore {
  constructor() {
    this.detailListAll = [];
  }

  setDetailListAll(journalItems) {
    this.detailListAll = journalItems;
  }

  getDetailListAll() {
    return this.detailListAll;
  }
}
