export const dataRequestToAPI = async (URL) => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      // 요청은 성공했지만 서버에서 오유가 발생한 경우
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    // 네트워크 요청에 문제가 있는 경우 예외 처리
    throw new Error(`fetch 에러! ${error}`);
  }
};
