// 홀수

// 답안
const solution = (arr) => {
  let answer = [];
  const oddArr = arr.filter((num) => num % 2 !== 0);
  answer.push(
    oddArr.reduce((a, b) => a + b),
    Math.min(...oddArr)
  );

  return answer;
};
const arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
