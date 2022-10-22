// 가장 긴 문자열

// 답안

const solution = (l, arr) => {
  return arr.reduce((a, b) => (a.length > b.length ? a : b));
};

const arr = ["teacher", "time", "student", "beautiful", "good"];

console.log(solution(5, arr));
