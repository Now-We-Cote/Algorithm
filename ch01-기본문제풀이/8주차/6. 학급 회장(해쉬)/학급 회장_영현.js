// 학급 회장

// 답안

const solution = (n, arr) => {
  const chairObj = arr.reduce((target, key, index) => {
    target[key] ? target[key]++ : (target[key] = 1);
    return target;
  }, {});
  const maxValue = Object.values(chairObj).sort((a, b) => b - a)[0];
  return Object.keys(chairObj).find((key) => chairObj[key] === maxValue);
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
