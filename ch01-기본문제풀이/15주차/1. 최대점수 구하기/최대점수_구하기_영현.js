// 최대점수 구하기

// 답안
const solution = (M, N, arr) => {
  let answer = Number.MIN_SAFE_INTEGER;
  const DFS = (v, scoreSum, timeSum) => {
    const n = arr.length;
    if (timeSum > N) return; // sum이 제한된 c보다 크면 return
    if (v === n) {
      answer = Math.max(answer, scoreSum);
    } else {
      DFS(v + 1, scoreSum + arr[v][0], timeSum + arr[v][1]);
      DFS(v + 1, scoreSum, timeSum);
    }
  };
  DFS(0, 0, 0);
  return answer;
};

solution(5, 20, [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
]);
