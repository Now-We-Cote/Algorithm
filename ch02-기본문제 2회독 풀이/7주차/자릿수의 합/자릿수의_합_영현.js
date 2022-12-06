// 자릿수의 합

// 답안
const solution = (arr) => {
  let answer;
  let maxNum = 0;
  arr.forEach((e) => {
    const sum = [...e.toString()].reduce((a, b) => a + Number(b), 0);
    if (sum > maxNum) {
      maxNum = sum;
      answer = e;
    } else if (sum === maxNum) {
      if (e > answer) answer = e;
    }
  });

  return answer;
};

const arr = [128, 460, 603, 40, 521, 137, 123];

solution(arr); // '137'
