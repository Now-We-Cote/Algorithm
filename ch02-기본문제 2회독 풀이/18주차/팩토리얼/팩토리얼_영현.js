// 팩토리얼

// 풀이
const solution = (N) => {
  let answer;

  const DFS = (L, n) => {
    if (L === 1) {
      answer = n;
    } else {
      DFS(L - 1, n * (L - 1));
    }
  };
  DFS(N, N);
  return answer;
};

solution(5);
