// 뮤직비디오

// 풀이
const solution = (N, M, arr) => {
  let maxMemory = 0;
  let memory = 0;
  const addNum = arr.reduce((a, b) => a + b);
  for (let i = N - 1; i >= 0; i--) {
    memory += arr[i];
    if (memory > addNum / (M - 1)) {
      maxMemory = memory - arr[i];
      memory = 0;
    }
  }
  return maxMemory;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

solution(9, 3, arr);
