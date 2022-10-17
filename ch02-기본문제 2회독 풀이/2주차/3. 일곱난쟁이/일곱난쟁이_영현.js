// 일곱난쟁이

// 답안

const solution = (arr) => {
  const sum = arr.reduce((a, b) => a + b);
  const answer = [];
  for (let i = 0; i < 9; i++) {
    for (let j = i + 1; j <= 9; j++) {
      if (arr[i] + arr[j] === sum - 100) {
        answer.push(...arr.filter((dwf) => dwf !== arr[i] && dwf !== arr[j]));
      }
    }
  }
  return answer;
};

const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

console.log(solution(arr));
