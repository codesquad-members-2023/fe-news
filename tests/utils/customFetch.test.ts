import { customGet } from '@utils/customFetch.js';
import { BASIC_URL } from '@src/constants/constants.js';

// 서버가 켜져있어야지만 fetch가 되는데, 이 부분에 대한 의존성을 낮추는 방법은 없을까..?
// 서버가 꺼지면 test도 실패가 되어버리니까!
// 추후에 mock server 알아보기
describe('Custom GET', () => {
  it('About Left Issue data', async () => {
    const issues = (
      await customGet(`${BASIC_URL}/issues`).then((res) => res.json())
    )[0];
    const leftIssues = issues.leftRollingData;
    const firstIssue = leftIssues[0];
    expect(firstIssue).toEqual(
      "납치·살인 3인조 영장심사…'왜 죽였나' 묻자 묵묵부답",
    );
  });

  it('About Error', async () => {
    const mockPromise = async () => await customGet(`${BASIC_URL}/none`);
    await expect(mockPromise).rejects.toThrow(
      new Error('Error: 404 Not Found'),
    );
  });
});
