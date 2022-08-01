// 동전 교환

// 답안
const solution = (m, arr) => {
  let answer = Number.MAX_SAFE_INTEGER;
  const n = arr.length;
  const DFS = (L, sum) => {
    if (sum > m) return;
    if (sum === m) {
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  };
  DFS(0, 0);
  return answer;
};

solution(15, [1, 2, 5]);

// 여기서 더 빠르게 진행하려면
const solution = (m, arr) => {
  let answer = Number.MAX_SAFE_INTEGER;
  const n = arr.length;
  const DFS = (L, sum) => {
    if (sum > m || L > answer) return;
    if (sum === m) {
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  };
  DFS(0, 0);
  return answer;
};

solution(15, [1, 2, 5]);
