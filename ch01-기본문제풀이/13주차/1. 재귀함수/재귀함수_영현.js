// 재귀함수와 스택프레임

// 답안
const answer = [];
const solution = (num) => {
  //재귀 함수는 break를 걸 수 있는 조건문이 있어야 함
  if (num === 0) return;
  //num-1의 스택이 계속 쌓임
  solution(num - 1);
  answer.push(num);
  //return은 왜 바로 하지 않는건지 궁금
  return answer;
};

const num = 3;
solution(num);
