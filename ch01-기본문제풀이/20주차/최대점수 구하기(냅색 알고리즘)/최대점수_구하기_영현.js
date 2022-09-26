// 최대 점수 구하기

// 답안
const solution = (m, arr) => {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 0);
  // 문제 숫자만큼 돌려줌
  for (let i = 0; i < arr.length; i++) {
    let ps = arr[i][0]; // 문제의 점수
    let pt = arr[i][1]; // 문제 푸는 시간
    for (let j = m; j >= pt; j--) {
      dy[j] = Math.max(dy[j], dy[j - pt] + ps);
    }
  }
  answer = dy[m];
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
