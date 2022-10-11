// 삼각형 판별하기

// 답안
const solution = (arr) => {
  const max = Math.max(...arr);
  const total = arr.reduce((a, b) => a + b);
  const rest = total - max;
  return rest > max ? "YES" : "NO";
};

console.log(solution([6, 7, 11]));
