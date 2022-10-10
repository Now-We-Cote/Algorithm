// 돌다리 건너기

// 답안
const solution = (n) => {
  let answer = 0;
  const rockN = n + 1;
  let dy = Array.from({ length: rockN + 1 }, () => 0);

  // 1,2번 돌다리 초기값 입력
  dy[1] = 1;
  dy[2] = 2;

  // 3번 계단부터 for문
  for (let i = 3; i <= rockN; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }

  answer = dy[rockN];

  return answer;
};

solution(7);
