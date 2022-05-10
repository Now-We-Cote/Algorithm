// 자릿수의 합

// 답안

const solution = (num, arr) => {
  let answer;
  let maxNum = 0;
  for (i = 0; i < arr.length; i++) {
    let result = arr[i]
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);
    if (result > maxNum) {
      answer = arr[i];
      maxNum = result;
    } else if (result === maxNum) {
      if (answer < arr[i]) {
        answer = arr[i];
      }
    }
  }
  return answer;
};

let arr = [128, 460, 603, 40, 521, 137, 123];

solution(7, arr); // '137'
