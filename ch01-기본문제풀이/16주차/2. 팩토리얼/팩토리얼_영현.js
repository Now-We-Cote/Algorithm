// 팩토리얼

// 답안
const solution = (n) => {
  let answer = 1; // 첫번째 n을 곱할때 n일수 있도록
  const DFS = (v) => {
    if (v === 0) return; // 팩토리얼 숫자가 0일 때 return
    answer *= v;
    DFS(v - 1);
  };
  DFS(n);

  return answer;
};
let facNum = 5;
solution(facNum);
