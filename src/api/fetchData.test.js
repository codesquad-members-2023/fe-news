import { dataRequestToAPI } from "./fetchData";

describe("dataRequestToAPI 함수", () => {
  test("데이터를 잘 받아온다.", async () => {
    const URL = "http://localhost:3000/headLine";

    const response = await dataRequestToAPI(URL);
    expect(response.length).toBeGreaterThan(0);
  });

  test("데이터를 못받아오면 catch 한다", async () => {
    const URL = "http://localhost:3000/invalidURL";

    await expect(dataRequestToAPI(URL)).rejects.toThrowError("404 Not Found");
  });
});
