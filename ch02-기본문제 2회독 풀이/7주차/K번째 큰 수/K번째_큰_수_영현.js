// K번째 큰 수

// 답안
const solution = (K, arr) => {
  const sumArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        sumArr.push(arr[i] + arr[j] + arr[k]);
      }
    }
  }

  const set = new Set(sumArr);
  const resultArr = [...set].sort((a, b) => b - a);
  return resultArr[K - 1];
};

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

solution(3, arr);
