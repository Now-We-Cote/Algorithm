// 계단 오르기

// 답안
const solution = (n) => {
  let answer = 0;
  let dy = Array.from({ length: n + 1 }, () => 0);

  // 1,2번 계단 초기값은 입력 후
  dy[1] = 1;
  dy[2] = 2;

  // 3번 계단부터 for문
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }

  answer = dy[n];

  return answer;
};

solution(7);
