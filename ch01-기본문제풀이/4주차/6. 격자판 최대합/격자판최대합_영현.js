// 격자판 최대합

// 답안
function solution(arr) {
  let answer1 = 0;
  let answer2 = 0;
  let answer3 = 0;
  let answer4 = 0;

  for (i = 0; i < arr.length; i++) {
    const row = arr[i].reduce((a, b) => a + b);
    const column = arr.map((e) => e[i]).reduce((a, b) => a + b);
    answer3 += arr[i][i];
    answer4 += arr[i][arr.length - i - 1];
    if (answer1 < column) {
      answer1 = column;
    }
    if (answer2 < row) {
      answer2 = row;
    }
  }

  return Math.max(answer1, answer2, answer3, answer4);
}

const arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
solution(arr); // 155
