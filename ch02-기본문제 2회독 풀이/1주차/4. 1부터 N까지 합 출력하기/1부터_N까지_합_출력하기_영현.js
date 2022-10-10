// 1부터 N까지 합 출력하기

// 답안
const solution = (num) => {
  let answer = 0;
  for (let i = 1; i <= num; i++) {
    answer += i;
  }
  return answer;
};

console.log(solution(6));
