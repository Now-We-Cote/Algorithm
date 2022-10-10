// 동전 교환

// 답안
const solution = (m, coin) => {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 1000); // 최소 금액 탐색이기때문에 1000으로 초기화
  dy[0] = 0;
  // 동전의 종류만큼 i를 돌림
  for (let i = 0; i < coin.length; i++) {
    // 거슬러줄 금액이 m이기 때문에 m까지 돌게 됨
    for (let j = coin[i]; j <= m; j++) {
      // j라는 금액을 거슬러 줄 때 최소 갯수 , coin[i]는 적용하기 때문에 빼주고 남은 금액을 거슬러주는 최소 갯수가 dy에 저장되어 있다. 거기에 +1을 해서 dy를 업데이트
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
  }
  answer = dy[m];
  return answer;
};
const arr = [1, 2, 5];
solution(15, arr);
