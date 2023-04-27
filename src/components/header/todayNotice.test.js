import { getTodayNotice } from "./todayNotice.js";

describe("getTodayNoirce 함수", () => {
  test("오늘 날짜를 불러온다", () => {
    const days = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];

    const today = new Date();
    const year = today.getFullYear();
    const month = ("" + (today.getMonth() + 1)).padStart(2, "0");
    const date = ("" + today.getDate()).padStart(2, "0");
    const day = days[today.getDay()];

    expect(getTodayNotice()).toMatch(
      `<span class="Body-MD">${year}.${month}.${date}. ${day}</span>`
    );
  });
});
