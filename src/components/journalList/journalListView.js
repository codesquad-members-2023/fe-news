import { getJournal } from "../../api/getData.js";
import { Carousel } from "./journalTrack.js";
import { Journal } from "./journal.js";

const createNewsStandJournal = () => {
  const journalListEl = document.createElement("article");
  journalListEl.classList.add("news-stand-jounalList");
  return journalListEl;
};

const createJournalHeader = () => {
  const journalHeader = `<header class="journal-header display-flex">
    <div class="journal-area display-flex">
        <div class="journal-all Title-MD">전체 언론사</div>
        <div class="journal-subList Body-MD">내가 구독한 언론사</div>
    </div>
    <div class="journal-btns display-flex">
        <div class="journal-btn__detail">
            <img src="src/assets/icons/list-view.svg" />
        </div>
    <div class="journal-btn__grid">
            <img src="src/assets/icons/grid-view-on.svg" />
        </div>
    </div>
</header>`;
  return journalHeader;
};

const createJournalCarousel = () => {
  const journalContainerEl = document.querySelector(".journal-container");
  const journalCarousel = new Carousel(journalContainerEl);
  return journalCarousel;
};

const renderJournal = async () => {
  try {
    const journalURL = "http://localhost:3000/journal";
    const journalData = await getJournal(journalURL);
    const journal = new Journal(journalData);
    const journalItems = journal.getJournalItem();
    return journalItems;
  } catch (error) {
    console.error(error);
  }
};

export {
  createNewsStandJournal,
  createJournalHeader,
  createJournalCarousel,
  renderJournal,
};
