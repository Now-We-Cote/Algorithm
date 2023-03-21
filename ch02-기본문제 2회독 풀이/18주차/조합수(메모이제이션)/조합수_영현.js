// 조합수

// 풀이
const solution = (n, r) => {
  const DFS = (n, r) => {
    // 3C3(3개 중에 3개 뽑는 상황)처럼 n과 r이 같거나, r이 0이면
    if (n === r || r === 0) return 1;
    else return DFS(n - 1, r - 1) + DFS(n - 1, r);
  };
  return DFS(n, r);
};

solution(5, 3);
