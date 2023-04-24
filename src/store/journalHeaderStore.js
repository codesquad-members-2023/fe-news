export class JournalHeaderStore {
  constructor(updateJournalData, updateJournalDetail) {
    this.journalState = "STATE_ALL"; // "STATE_SUB"
    this.journalFrame = "FRAME_GRID"; // "FRAME_DETAIL"
    this.journalListAll = [];
    this.journalSubscribe = new Set();
    this.updateJournalData = updateJournalData;
    this.updateJournalDetail = updateJournalDetail;
  }

  setState(newState) {
    this.journalState = newState;
    this.updateJournalData(newState);
  }

  getState() {
    return this.journalState;
  }

  setJournalListAll(allItems) {
    this.journalListAll = allItems.sort(() => 0.5 - Math.random());
  }

  addSubscribe(clickedJournal) {
    this.journalSubscribe.add(clickedJournal);
  }

  deleteSubscribe(clickedJournal) {
    this.journalSubscribe.delete(clickedJournal);
    this.updateJournalData(this.journalState);
  }

  getJournalListAll() {
    return this.journalListAll;
  }

  getJournalSubscribe() {
    return this.journalSubscribe;
  }

  setFrame(newFrame) {
    this.journalFrame = newFrame;
    this.updateJournalDetail(newFrame);
  }

  getFrame() {
    return this.journalFrame;
  }
}
