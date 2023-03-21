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

// 메모이제이션 풀이
const solution = (n, r) => {
  let answer;
  let dy = Array.from(Array(35), () => Array(35).fill(0)); // 최대로
  const DFS = (n, r) => {
    if (dy[n][r] > 0) return dy[n][r]; //2차원 배열에 입력했던 값이 있다면
    if (n === r || r === 0) return 1;
    else {
      return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
    } //2차원에 배열에 값을 입력해둠
  };

  answer = DFS(n, r);

  return answer;
};

solution(33, 19);
