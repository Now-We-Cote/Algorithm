// 봉우리

// 답안
function solution(arr) {
  let answer = 0;
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      const peak = arr[i][j];
      const left = arr[i - 1][j] || 0;
      const right = arr[i + 1][j] || 0;
      const upper = arr[i][j + 1] || 0;
      const downer = arr[i][j - 1] || 0;
      const maxHeigt = Math.max(left, right, upper, downer);
      if (peak > maxHeigt) {
        answer++;
      }
    }
  }
}
const length = 5;
const arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
solution(arr);
