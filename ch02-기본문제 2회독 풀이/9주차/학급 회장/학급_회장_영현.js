// 학급 회장

// 답안
const solution = (n, arr) => {
  const chairObj = arr.reduce((acc, cur, index) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1);
    return acc;
  }, {});
  return Object.entries(chairObj).sort((a, b) => b[1] - a[1])[0][0]; // 객체를 배열화 시켜서 sort
};
let arr = [
  "B",
  "A",
  "C",
  "B",
  "A",
  "C",
  "C",
  "A",
  "C",
  "C",
  "B",
  "D",
  "E",
  "D",
  "E",
];

solution(15, arr);
