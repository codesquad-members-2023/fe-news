export class JournalTrackStore {
  constructor() {
    this.pageSize;
  }

  setBatchSize(batchElments) {
    this.pageSize = batchElments.length;
  }

  getBatchSize() {
    return this.pageSize;
  }
}
