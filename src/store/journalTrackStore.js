export class JournalTrackStore {
  constructor() {
    this.batchPageSize;
  }

  setBatchSize(batchElments) {
    this.batchPageSize = batchElments.length;
  }

  getBatchSize() {
    return this.batchPageSize;
  }
}
