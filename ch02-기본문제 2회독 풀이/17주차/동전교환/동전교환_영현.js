// 동전교환

// 풀이
const solution = (n, arr, m) => {
  let minCoinCount = Number.MAX_SAFE_INTEGER;
  let cost = 0;

  const DFS = (L, sumCost) => {
    if (sumCost > m) return;
    if (sumCost === m) {
      minCoinCount = Math.min(minCoinCount, L);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, arr[i] + sumCost);
      }
    }
  };
  DFS(0, 0);
  return minCoinCount;
};
const coinArr = [1, 2, 5];
solution(3, coinArr, 15);
