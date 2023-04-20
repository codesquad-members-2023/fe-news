export class JournalDetailStore {
  constructor(renderJournalDetail) {
    this.detailListAll = [];
    this.typeEconomy = [];
    this.typeBroad = [];
    this.typeIT = [];
    this.typeEnglish = [];
    this.typeSports = [];
    this.typeMagazine = [];
    this.typeArea = [];
    this.typeETC = [];
    this.currentType = "종합/경제";
    this.renderJournalDetail = renderJournalDetail;
  }

  setDetailListAll(journalItems) {
    this.detailListAll = journalItems;
  }

  getDetailListAll() {
    return this.detailListAll;
  }

  setDetailByType() {
    this.detailListAll.forEach((journal) => {
      const type = journal.journalData.mediaInfo.type;
      switch (type) {
        case "종합/경제":
          this.typeEconomy.push(journal);
          break;
        case "방송/통신":
          this.typeBroad.push(journal);
          break;
        case "IT":
          this.typeIT.push(journal);
          break;
        case "영자지":
          this.typeEnglish.push(journal);
          break;
        case "스포츠/연예":
          this.typeSports.push(journal);
          break;
        case "매거진/전문지":
          this.typeMagazine.push(journal);
          break;
        case "지역":
          this.typeArea.push(journal);
          break;
        default:
          this.typeETC.push(journal);
      }
    });
  }

  setCurrentType(selectedType) {
    this.currentType = selectedType;
    this.renderJournalDetail();
  }

  getCurrentType() {
    return this.currentType;
  }
}
