// 좌표 정렬

// 답안
const solution = (arr) => {
  return arr.sort((a, b) => {
    return a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1];
  });
};

const arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
solution(arr);
