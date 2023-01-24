// Least Recently Used

// 풀이
const solution = (S, N, arr) => {
  let cache = new Array(S).fill(0);

  for (let i = 0; i < N; i++) {
    if (cache.includes(arr[i])) {
      const cacheIdx = cache.indexOf(arr[i]);

      cache.splice(cacheIdx, 1);
      cache.unshift(arr[i]);
    } else {
      cache.unshift(arr[i]);
      cache.pop();
    }
  }
};

const S = 5;
const N = 9;
const arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];

solution(S, N, arr);
