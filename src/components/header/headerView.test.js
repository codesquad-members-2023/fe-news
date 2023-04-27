import { createNewsStandHeader } from "./headerView.js";
import { getTodayNotice } from "./todayNotice.js";
import { JSDOM } from "jsdom";

describe("createNewStandHeader 함수", () => {
  let dom;

  beforeAll(() => {
    dom = new JSDOM("<!DOCTYPE html>");
    global.window = dom.window;
    global.document = dom.window.document;
  });

  afterAll(() => {
    dom.window.close();
  });

  test("뉴스 스탠드 헤더 엘리먼트를 생성한다", () => {
    const headerEl = createNewsStandHeader();

    expect(headerEl.tagName).toBe("HEADER");
    expect(headerEl.classList.contains("news-stand-header")).toBe(true);
    expect(headerEl.classList.contains("news-stand-component_size")).toBe(true);

    const headerLeftEl = headerEl.children[0];
    expect(headerLeftEl.classList.contains("flex-start")).toBe(true);
    expect(headerLeftEl.classList.contains("header-left")).toBe(true);
    expect(headerLeftEl.children[0].tagName).toBe("IMG");
    expect(headerLeftEl.children[1].tagName).toBe("SPAN");

    const headerRightEl = headerEl.children[1];
    expect(headerRightEl.classList.contains("flex-center")).toBe(true);
    expect(headerRightEl.innerHTML).toMatch(getTodayNotice());
  });
});
