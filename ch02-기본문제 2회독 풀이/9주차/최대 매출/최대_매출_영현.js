// 최대 매출

// 답안
const solution = (n, arr) => {
  let sumNum = 0;
  let maxNum = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    sumNum = arr[i];
    for (let j = i + 1; j < i + n; j++) {
      sumNum += arr[j];
    }
    maxNum = Math.max(sumNum, maxNum);
  }

  return maxNum;
};
let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

solution(3, arr);

// 답안2
const solution = (n, arr) => {
  return arr.reduce((acc, cur, idx) => {
    let sumNum = 0;
    for (let i = 0; i < n; i++) {
      sum += arr[idx + i];
    }
    return sumNum > acc ? sumNum : acc;
  }, 0);
};

let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

solution(3, arr);
