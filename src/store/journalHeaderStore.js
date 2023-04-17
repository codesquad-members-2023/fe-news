export class JournalHeaderStore {
  constructor(updateJournalData) {
    this.journalState = "STATE_ALL"; // "STATE_SUB"
    this.journalFrame = "GRID"; // "DETAIL"
    this.journalListAll = [];
    this.journalSubscribe = [];
    this.updateJournalData = updateJournalData;
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

  setJournalSubscribe(subItems) {
    this.journalSubscribe = subItems;
  }

  getJournalListAll() {
    return this.journalListAll;
  }

  getJournalSubscribe() {
    return this.journalSubscribe;
  }
}
