// N까지합구하기

// 답안
// 모범 답안과 일치

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(10)); // 55
