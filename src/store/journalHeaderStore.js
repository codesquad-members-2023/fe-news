export class JournalHeaderStore {
  constructor() {
    this.journalState = "ALL"; // "SUB"
    this.journalFrame = "GRID"; // "DETAIL"
  }

  setState(newState) {
    this.journalState = newState;
  }

  getState() {
    return this.journalState;
  }
}
