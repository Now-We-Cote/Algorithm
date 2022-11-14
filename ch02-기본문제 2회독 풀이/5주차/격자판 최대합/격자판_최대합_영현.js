// 격자판 최대합

// 답안
function solution(arr) {
  let answer = 0;
  let rowSum = 0;
  let colSum = 0;
  let diSum1 = 0;
  let diSum2 = 0;

  for (let i = 0; i < arr.length; i++) {
    rowSum = colSum = 0;
    for (let j = 0; j < arr.length; j++) {
      rowSum += arr[i][j];
      colSum += arr[j][i];
    }
    answer = Math.max(answer, rowSum, colSum);
  }
  rowSum = colSum = 0;

  for (let i = 0; i < arr.length; i++) {
    diSum1 += arr[i][i];
    diSum2 += arr[i][i - arr.length - 1];
  }
  answer = Math.max(answer, rowSum, colSum, diSum1, diSum2);

  return answer;
}

const arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
solution(arr);
