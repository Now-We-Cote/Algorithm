// 연속 부분 수열2

// 답안

const solution = (n, arr) => {
  let answer = 0;
  let sumNum = 0;
  for (let i = 0; i < arr.length; i++) {
    sumNum = arr[i];
    for (let j = i + 1; j < arr.length + 1; j++) {
      if (sumNum <= n) {
        answer++;
      } else {
        break;
      }
      sumNum += arr[j];
    }
  }

  return answer;
};
const arr = [1, 3, 1, 2, 3];
solution(5, arr);
