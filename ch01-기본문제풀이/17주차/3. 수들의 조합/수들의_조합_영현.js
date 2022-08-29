// 수들의 조합

// 답안

const solution = (n, k, arr, m) => {
  let answer = 0;
  let tmp = Array.from({ length: k }, () => 0);

  const DFS = (L, s) => {
    if (L === k) {
      const sum = tmp.reduce((a, b) => a + b);
      if (sum % m === 0) answer++;
    } else {
      for (let i = s; i < n; i++) {
        tmp[L] = arr[i];
        DFS(L + 1, i + 1);
      }
    }
  };
  DFS(0, 0);

  return answer;
};

const arr = [2, 4, 5, 8, 12];
solution(5, 3, arr, 6);
