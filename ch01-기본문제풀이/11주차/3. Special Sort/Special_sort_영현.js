// Special Sort

// 답안
const solution = (arr) => {
  const negativeArr = [];
  const positiveArr = [];
  for (i = 0; i < arr.length; i++) {
    arr[i] < 0 ? negativeArr.push(arr[i]) : positiveArr.push(arr[i]);
  }
  return [...negativeArr, ...positiveArr];
};

const arr = [1, 2, 3, -3, -2, 5, 6, -6];
solution(arr);

// 선생님 답안

const solution = (arr) => {
  let answer = arr;
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
};

const arr = [1, 2, 3, -3, -2, 5, 6, -6];
solution(arr);
