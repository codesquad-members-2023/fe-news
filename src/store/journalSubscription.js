class Subscription {
  constructor(journal, subState = false) {
    this.journal = journal;
    this.subState = subState;
  }

  toggleSubscription() {
    this.subState = !this.subState;
  }
}
