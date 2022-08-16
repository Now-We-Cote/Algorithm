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

{
  // 메모이제이션 사용 케이스
  const solution = (n, r) => {
    let answer;
    // 연산 시간을 줄이는 법 = 2차원 배열 등을 만들어서 이미 거쳐간 곳의 값을 기록해놓고, 나중에 뽑아 사용한다 (메모이제이션)
    // 메모이제이션을 사용하면 시간 복잡도가 확 줄어든다
    let dy = Array.from(Array(35), () => Array(35).fill(0)); // 각각 행번호 열번호 - 최대값을 받아올 수 있도록 큰 값을 넣어둠
    const DFS = (n, r) => {
      if (dy[n][r] > 0) return dy[n][r];
      // 언제 종착점이냐 = r이 0이거나, n과 r 이 1인 경우
      if (n === r || r === 0) {
        return 1; // 끝이니까 1을 반환한다
      } else {
        return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
      }
    };
    answer = DFS(n, r);
    return answer;
  };
  solution(33, 19);
}
