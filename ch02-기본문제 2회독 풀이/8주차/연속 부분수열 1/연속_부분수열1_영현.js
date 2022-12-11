// 연속 부분 수열1

// 답안

const solution = (n, arr) => {
  let answer = 0;
  let sumNum = 0;
  for (let i = 0; i < arr.length; i++) {
    sumNum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      sumNum += arr[j];
      if (sumNum === n) {
        answer++;
        break;
      }
    }
  }

  return answer;
};
const arr = [1, 2, 1, 3, 1, 1, 1, 2];
solution(6, arr);
