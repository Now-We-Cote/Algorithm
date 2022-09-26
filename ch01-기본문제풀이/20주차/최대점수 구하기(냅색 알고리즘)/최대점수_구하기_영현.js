// 최대 점수 구하기

// 답안
const solution = (m, arr) => {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 0);
  // 문제 갯수만큼 돌려줌
  for (let i = 0; i < arr.length; i++) {
    let ps = arr[i][0]; // 문제의 점수
    let pt = arr[i][1]; // 문제 푸는 시간

    // j는 m으로 넘어오는 20분 부터 작아지면서 for문을 돌게 됨(동전 교환처럼 배열의 앞에서부터 for문이 돌게되면 중복으로 처리가 됨)
    // pt보다 커야하는 이유는 풀 수 있는 시간이기 때문.
    for (let j = m; j >= pt; j--) {
      dy[j] = Math.max(dy[j], dy[j - pt] + ps); // 기존 dy[j]와 dy[j-pt] + ps -> 기존에서 지금 돌고있는 문제를 풀고 남은 시간의 점수를 합한 것
    }
  }
  answer = dy[m]; // 20번째의 최대 점수
  return answer;
};
let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
solution(20, arr);
