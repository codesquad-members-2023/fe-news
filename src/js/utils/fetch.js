//상태 변경 메서드 (데이터를 변경하는 행위) fetch 해오기
export const getAllData = async (rollingURL, mediaURL) => {
  const requests = [rollingURL, mediaURL].map(url => fetch(url));
  const [rollingRequest, mediaRequest] = await Promise.all(requests);
  const [rollingData, mediaData] =  await Promise.all([rollingRequest.json(), mediaRequest.json()]);

  return [rollingData , mediaData];
}