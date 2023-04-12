import JournalActions from "../action/journalActions.js";

const JournalDispatcher = {
  getJournalList(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => JournalActions.setJournalList(data))
      .catch((error) => console.error(error));
  },
};

export default JournalDispatcher;

// getJournalList() 메서드는 API에서 데이터를 가져와서 Action을 호출한다.
// 가져온 데이터는 JournalActions.setJournalList 메서드를 통해 Store의 상태를 변경한다.

/*
import JournalDispatcher from "./JournalDispatcher.js";
import JournalStore from "./JournalStore.js";

JournalDispatcher.getJournalList("http://localhost:3000/journal");

console.log(JournalStore.getState().journalList);
*/
