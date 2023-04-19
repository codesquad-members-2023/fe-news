import { getKrDate } from '@utils/date';

describe('Get date', () => {
  it('korean date', () => {
    const mockDate = new Date('2023.04.19');
    expect(getKrDate('ko-KR', mockDate)).toEqual('2023. 4. 19. 수요일');
  });
});
