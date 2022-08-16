{
  const solution = (n, r) => {
    let answer;
    const DFS = (n, r) => {
      // 언제 종착점이냐 = r이 0이거나, n과 r 이 1인 경우
      if (n === r || r === 0) {
        return 1; // 끝이니까 1을 반환한다
      } else {
        return DFS(n - 1, r - 1) + DFS(n - 1, r);
      }
    };
    answer = DFS(5, 3);
    return answer;
  };

  solution(5, 3);
}
