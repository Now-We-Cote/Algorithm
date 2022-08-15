// 조합의 경우수

// 답안
const solution = (n, r) => {
  let answer;
  const DFS = (n, r) => {
    // 트리를 뻗다가 n === r(숫자가 같으면 결국 하나의 경우의 수밖에 나오지 않음) 이거나 r이 0이면
    if (n === r || r === 0) {
      return 1;
    } else {
      return DFS(n - 1, r - 1) + DFS(n - 1, r);
    }
  };
  answer = DFS(n, r);

  return answer;
};
solution(5, 3);

// 선생님 답안(메모리제이션)
const solution = (n, r) => {
  let answer;
  let dy = Array.from(Array(35), () => Array(35).fill(0));

  const DFS = (n, r) => {
    // dy배열에 저장해둔 값이 있으면
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) {
      return 1;
    } else {
      return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r)); // DFS값을 return함과 동시에 dy[n][r]에 DFS값 저장
    }
  };
  answer = DFS(n, r);

  return answer;
};
solution(5, 3);
